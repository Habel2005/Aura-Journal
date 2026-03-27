
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="font-headline text-6xl md:text-9xl uppercase tracking-tighter leading-none mb-12">
              Begin your <br /> <span className="text-accent italic">Journey</span>
            </h2>
            <Link 
              href="/signup" 
              className="group inline-flex items-center space-x-6 py-6 px-12 bg-accent text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="font-headline text-2xl uppercase tracking-tighter">Try Aura Free</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-12">
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold">Product</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-accent transition-colors text-lg opacity-80 hover:opacity-100">Daily Journal</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors text-lg opacity-80 hover:opacity-100">Mood Tracker</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors text-lg opacity-80 hover:opacity-100">Gratitude Prompts</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors text-lg opacity-80 hover:opacity-100">Calendar View</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold">Connect</h4>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"><Twitter size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"><Linkedin size={20} /></a>
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xs uppercase tracking-widest opacity-40">Newsletter</p>
                <div className="flex border-b border-primary-foreground/20 py-2">
                  <input type="email" placeholder="Your email" className="bg-transparent border-none outline-none text-sm w-full" />
                  <button className="text-accent hover:scale-110 transition-transform"><ArrowRight size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] opacity-40">
          <p>Aura Mindful Journaling &copy; 2024. Designed for the peace of mind.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
