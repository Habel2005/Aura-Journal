
"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how far the section has moved through the viewport
      // 0 when top is at bottom of screen, 1 when bottom is at top of screen
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map progress to a smoother value for the shade effect
  // We want the peak "light" to be around the middle of the scroll (0.5 progress)
  const shadeIntensity = Math.sin(scrollProgress * Math.PI);

  return (
    <section ref={sectionRef} className="py-60 px-6 md:px-12 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-12 flex items-center gap-4 animate-fade-in-up">
            <span className="w-12 h-px bg-accent" />
            The Philosophy
          </p>
          
          <div className="relative">
            <h2 
              className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-[1.05] transition-all duration-700 ease-out"
              style={{
                opacity: 0.2 + (shadeIntensity * 0.8),
                transform: `translateY(${(1 - shadeIntensity) * 20}px)`,
                filter: `blur(${(1 - shadeIntensity) * 2}px)`
              }}
            >
              Your thoughts <span className="italic text-accent">deserve</span> a sanctuary. 
              <br />
              <span 
                className="opacity-20 ml-4 inline-block transition-opacity duration-1000"
                style={{ opacity: 0.1 + (shadeIntensity * 0.3) }}
              >
                Aura is designed for the modern mindful explorer.
              </span>
            </h2>
            
            {/* The "Shade" Overlay Layer for Awwwards-style text masking */}
            <h2 
              className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-[1.05] absolute top-0 left-0 pointer-events-none select-none text-foreground"
              style={{
                clipPath: `inset(0 ${100 - (scrollProgress * 150)}% 0 0)`,
                opacity: shadeIntensity
              }}
            >
              Your thoughts <span className="italic text-accent">deserve</span> a sanctuary.
            </h2>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute right-12 top-0 h-full w-px bg-border/20 hidden md:block">
        <div 
          className="w-full bg-accent transition-all duration-300" 
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
}
