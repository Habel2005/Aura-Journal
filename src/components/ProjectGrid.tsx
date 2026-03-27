
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Calendar, PenLine, Smile, Image as ImageIcon } from 'lucide-react';

const features = [
  {
    title: "Daily Journaling",
    description: "A distraction-free space for your morning pages and midnight reflections.",
    category: "Writing",
    image: PlaceHolderImages[0],
    icon: <PenLine className="w-5 h-5" />,
    span: "col-span-12 md:col-span-7",
    color: "bg-blue-500/5"
  },
  {
    title: "Mood Tracking",
    description: "Visualize your emotional journey with our intuitive mood mapping system.",
    category: "Analytics",
    image: PlaceHolderImages[1],
    icon: <Smile className="w-5 h-5" />,
    span: "col-span-12 md:col-span-5",
    color: "bg-orange-500/5"
  },
  {
    title: "Photo Memories",
    description: "Attach meaningful photos to your entries to preserve the visual context of your life.",
    category: "Archive",
    image: PlaceHolderImages[2],
    icon: <ImageIcon className="w-5 h-5" />,
    span: "col-span-12 md:col-span-5",
    color: "bg-purple-500/5"
  },
  {
    title: "Calendar Overview",
    description: "Navigate through your past self with an elegant, searchable timeline.",
    category: "Navigation",
    image: PlaceHolderImages[3],
    icon: <Calendar className="w-5 h-5" />,
    span: "col-span-12 md:col-span-7",
    color: "bg-neutral-500/5"
  }
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-4">
        <div className="max-w-2xl">
          <h2 className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-6">
            The <span className="text-accent italic">Aura</span> <br /> Experience
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs font-bold">
            Fundamentals of Mindful Living
          </p>
        </div>
        <div className="hidden md:block">
          <div className="font-headline text-9xl opacity-5 select-none">V01</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-12">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={cn(
              "group relative flex flex-col",
              feature.span,
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={cn(
              "relative aspect-[16/10] overflow-hidden rounded-3xl transition-all duration-700 mb-6 border border-border/50",
              "group-hover:shadow-2xl group-hover:shadow-accent/5"
            )}>
              <div className={cn("absolute inset-0 z-10 transition-colors duration-500", feature.color)} />
              <Image 
                src={feature.image.imageUrl} 
                alt={feature.title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105"
                data-ai-hint={feature.image.imageHint}
              />
              
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 text-xs font-bold uppercase tracking-widest shadow-sm">
                  {feature.icon}
                  {feature.category}
                </div>
              </div>
            </div>

            <div className="px-2">
              <h3 className="font-headline text-3xl uppercase tracking-tighter mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
