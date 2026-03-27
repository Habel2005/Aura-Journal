
"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const particlesCount = 4000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.012,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const purple = new THREE.Color(0x8b5cf6);
    const warmWhite = new THREE.Color(0xfff7ed);
    
    for (let i = 0; i < particlesCount; i++) {
        const mix = Math.random();
        const color = purple.clone().lerp(warmWhite, mix);
        colorArray[i * 3] = color.r;
        colorArray[i * 3 + 1] = color.g;
        colorArray[i * 3 + 2] = color.b;
    }

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5);
      const y = (event.clientY / window.innerHeight - 0.5);
      targetX = x;
      targetY = y;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.0008;
      particlesMesh.rotation.x += 0.0003;

      particlesMesh.rotation.y += (targetX * 0.05 - particlesMesh.rotation.y) * 0.05;
      particlesMesh.rotation.x += (targetY * 0.05 - particlesMesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div ref={containerRef} className="absolute inset-0 z-10" />
      
      <div className="container relative z-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="relative flex flex-col items-center pointer-events-none">
          <div 
            className="transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
          >
            <p className="text-[10px] md:text-xs uppercase tracking-[0.8em] md:tracking-[1.2em] text-accent font-bold mb-8 opacity-60">
              Personal Sanctuary
            </p>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            {/* Layer 1: Aura */}
            <h1 
              className="font-headline text-[22vw] md:text-[18rem] leading-[0.7] uppercase tracking-tighter transition-transform duration-700 ease-out will-change-transform mix-blend-multiply dark:mix-blend-screen"
              style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
            >
              Aura
            </h1>
            
            {/* Layer 2: Journal (Overlaid & Centered) */}
            <h1 
              className="font-headline text-[22vw] md:text-[18rem] leading-[0.7] uppercase tracking-tighter italic text-accent opacity-20 absolute transition-transform duration-1000 ease-out will-change-transform mix-blend-color-burn dark:mix-blend-overlay"
              style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
            >
              Journal
            </h1>
          </div>

          <div 
            className="mt-16 md:mt-24 transition-transform duration-700 ease-out will-change-transform max-w-xl mx-auto"
            style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
          >
            <p className="text-base md:text-xl font-light opacity-60 leading-relaxed px-4">
              Where your reflections meet <span className="text-accent font-medium">digital serenity</span>. A bespoke space for the modern mindful explorer.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator at the absolute bottom */}
      <div className="absolute bottom-12 left-0 w-full flex flex-col items-center pointer-events-none z-30">
        <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">Initiate Reflection</span>
            <div className="relative w-px h-20 md:h-24 overflow-hidden">
                <div className="absolute inset-0 bg-accent/20" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[scrollLine_2s_infinite]" />
            </div>
        </div>
      </div>
    </section>
  );
}
