
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Primary Navigation Bar */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/50" : "bg-transparent",
        isMenuOpen && "border-none bg-transparent backdrop-blur-none"
      )}>
        <Link 
          href="/" 
          className="font-headline text-2xl tracking-tighter uppercase font-bold flex items-center gap-2 relative z-[110]"
        >
          <div className={cn(
            "w-8 h-8 rounded-full bg-accent animate-pulse transition-colors duration-500", 
            isMenuOpen && "bg-white"
          )} />
          <span className={cn("transition-colors duration-500", isMenuOpen ? "text-white" : "text-foreground")}>
            Aura<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex space-x-12 relative z-[110]">
          {['Journal', 'Features', 'Community', 'Pricing'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors relative group",
                isMenuOpen ? "text-white/60 hover:text-white" : "text-foreground/60 hover:text-accent"
              )}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "p-2 relative z-[110] transition-colors rounded-full",
            isMenuOpen ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent/10"
          )}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full-Screen Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-primary z-[90] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-center items-center",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="flex flex-col space-y-6 md:space-y-10 items-center">
          {['Home', 'Journal', 'Mood Tracker', 'Gratitude', 'Settings'].map((item, i) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "font-headline text-4xl md:text-8xl text-white uppercase tracking-tighter hover:italic transition-all duration-300",
                "opacity-0",
                isMenuOpen && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-6">
          <div className="flex gap-8 opacity-40">
            {['Instagram', 'Twitter', 'LinkedIn'].map(link => (
              <span key={link} className="text-[10px] uppercase tracking-[0.3em] text-white cursor-pointer hover:opacity-100 transition-opacity">
                {link}
              </span>
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white opacity-20">
            Aura &copy; 2024 &mdash; Your Mindful Sanctuary
          </div>
        </div>
      </div>
    </>
  );
}
