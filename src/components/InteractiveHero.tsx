
"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a sphere of soft floating points
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0x8b5cf6, // Soft Violet
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5);
      mouseY = (event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // Subtle interaction follow
      particlesMesh.rotation.y += (mouseX * 0.05 - particlesMesh.rotation.y) * 0.02;
      particlesMesh.rotation.x += (mouseY * 0.05 - particlesMesh.rotation.x) * 0.02;

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
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      <div className="container relative z-10 px-6 md:px-12 text-center pointer-events-none">
        <p className="text-xs uppercase tracking-[0.5em] text-accent font-bold mb-6 animate-fade-in-up">
          Mindful Reflection
        </p>
        <h1 className="font-headline text-7xl md:text-[10rem] leading-[0.9] uppercase tracking-tighter animate-fade-in-up">
          Aura<span className="italic opacity-40">Journal</span>
        </h1>
        <p className="mt-8 text-lg md:text-2xl font-light max-w-2xl mx-auto opacity-70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Capture your thoughts, track your mood, and cultivate gratitude with a beautifully crafted personal journal.
        </p>
      </div>

      {/* FIXED: Scroll indicator now at the absolute bottom */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center pointer-events-none z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-40">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
