
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Nebula Cloud",
    category: "Brand Identity",
    image: PlaceHolderImages[0],
    span: "col-span-12 md:col-span-7",
    color: "bg-blue-500/10"
  },
  {
    title: "Aether Architecture",
    category: "Digital Experience",
    image: PlaceHolderImages[1],
    span: "col-span-12 md:col-span-5",
    color: "bg-orange-500/10"
  },
  {
    title: "Vortex Dynamics",
    category: "Motion Design",
    image: PlaceHolderImages[2],
    span: "col-span-12 md:col-span-5",
    color: "bg-purple-500/10"
  },
  {
    title: "Onyx Chronos",
    category: "Luxury Visuals",
    image: PlaceHolderImages[3],
    span: "col-span-12 md:col-span-7",
    color: "bg-neutral-500/10"
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
        <div className="max-w-2xl">
          <h2 className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-6">
            Selected <br /> <span className="text-accent italic">Works</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm max-w-md">
            A curated selection of our most ambitious projects where design meets cutting-edge technology.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="font-headline text-8xl opacity-5">2024</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-12">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={cn(
              "group relative overflow-hidden",
              project.span,
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <Link href={`/projects/${project.title.toLowerCase().replace(' ', '-')}`}>
              <div className={cn(
                "relative aspect-[16/10] overflow-hidden transition-all duration-700",
                "group-hover:scale-[0.98]"
              )}>
                <div className={cn("absolute inset-0 z-10 transition-colors duration-500", project.color)} />
                <Image 
                  src={project.image.imageUrl} 
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  data-ai-hint={project.image.imageHint}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
                   <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2 block">{project.category}</span>
                        <h3 className="font-headline text-3xl md:text-5xl text-white uppercase tracking-tighter">{project.title}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <ArrowUpRight size={24} />
                      </div>
                   </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
