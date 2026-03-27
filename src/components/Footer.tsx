
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-12">
              Let's <br /> <span className="text-accent">Collaborate</span>
            </h2>
            <Link 
              href="/contact" 
              className="group inline-flex items-center space-x-4 py-4 px-8 border border-primary-foreground/20 hover:border-accent hover:bg-accent transition-all duration-300"
            >
              <span className="font-headline text-xl uppercase tracking-tighter">Start a Project</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] opacity-40">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@catalyst.studio" className="hover:text-accent transition-colors">hello@catalyst.studio</a></li>
                <li><a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] opacity-40">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] opacity-40">Office</h4>
              <p className="opacity-80">123 Creative Lane<br />Los Angeles, CA 90001</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
          <p>Catalyst Creative Agency &copy; 2024. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
