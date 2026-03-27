
import InteractiveHero from '@/components/InteractiveHero';
import Navigation from '@/components/Navigation';
import FeatureShowcase from '@/components/ProjectGrid';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';
import { Star, Zap, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/20">
      <Navigation />
      
      {/* Hero Section */}
      <InteractiveHero />

      {/* Intro Section with Scroll Shading - Extracted for performance and animation */}
      <Philosophy />

      {/* Featured Features (renamed ProjectGrid) */}
      <FeatureShowcase />

      {/* High-End Feature Details Section */}
      <section id="services" className="py-32 px-6 md:px-12 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className="space-y-16">
                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="font-headline text-4xl uppercase tracking-tighter">Gratitude Prompts</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed pl-16">
                    Never face a blank page. Our AI-driven engine provides unique and thoughtful prompts to inspire gratitude and guide your daily reflection.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Shield size={24} />
                    </div>
                    <h3 className="font-headline text-4xl uppercase tracking-tighter">Secure & Private</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed pl-16">
                    Your inner world is yours alone. With end-to-end encryption and local-first storage, your entries remain for your eyes only.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="relative aspect-square bg-background rounded-[4rem] border border-border p-12 flex flex-col items-center justify-center text-center group transition-all duration-700 hover:border-accent/50 overflow-hidden">
                 <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="text-9xl font-headline text-accent mb-8 animate-pulse select-none">Mood</div>
                 <p className="text-xs uppercase tracking-[0.5em] font-bold opacity-40">Dynamic Tracking V1.0</p>
                 <div className="mt-12 flex gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-accent/20 border border-accent/20 group-hover:scale-110 transition-transform" />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Management Section */}
      <section id="studio" className="py-32 px-6 md:px-12 bg-background border-y border-border/50">
        <div className="container mx-auto flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-accent font-bold mb-12">Control</p>
          <h2 className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-12 max-w-4xl">
            Complete <span className="italic">Entry</span> Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-12">
            <div className="p-8 border border-border rounded-3xl hover:bg-secondary/50 transition-colors">
              <Zap className="w-8 h-8 text-accent mb-6 mx-auto" />
              <h4 className="font-headline text-xl uppercase mb-4">Fast View</h4>
              <p className="text-sm text-muted-foreground">Instantly revisit any entry with lightning-fast search and filter capabilities.</p>
            </div>
            <div className="p-8 border border-border rounded-3xl hover:bg-secondary/50 transition-colors">
              <Star className="w-8 h-8 text-accent mb-6 mx-auto" />
              <h4 className="font-headline text-xl uppercase mb-4">Edit & Refine</h4>
              <p className="text-sm text-muted-foreground">Life evolves, and so can your reflections. Update entries as your perspective shifts.</p>
            </div>
            <div className="p-8 border border-border rounded-3xl hover:bg-secondary/50 transition-colors">
              <Shield className="w-8 h-8 text-accent mb-6 mx-auto" />
              <h4 className="font-headline text-xl uppercase mb-4">Safe Delete</h4>
              <p className="text-sm text-muted-foreground">Full control over your data. Permanently remove entries whenever you need a fresh start.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
