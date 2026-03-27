
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

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center",
      isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/50" : "bg-transparent"
    )}>
      <Link href="/" className="font-headline text-2xl tracking-tighter uppercase font-bold flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
        Aura<span className="text-accent">.</span>
      </Link>

      <div className="hidden md:flex space-x-12">
        {['Journal', 'Features', 'Community', 'Pricing'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 z-50 hover:bg-accent/10 transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={cn(
        "fixed inset-0 bg-primary text-primary-foreground z-40 transition-transform duration-700 flex flex-col justify-center items-center",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="flex flex-col space-y-8 items-center">
          {['Home', 'Journal', 'Mood Tracker', 'Gratitude', 'Settings'].map((item, i) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "font-headline text-5xl md:text-7xl uppercase tracking-tighter hover:italic transition-all duration-300",
                "opacity-0",
                isMenuOpen && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-12 text-sm uppercase tracking-widest opacity-50">
          Aura &copy; 2024
        </div>
      </div>
    </nav>
  );
}
