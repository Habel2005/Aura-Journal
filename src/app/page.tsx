
import InteractiveHero from '@/components/InteractiveHero';
import Navigation from '@/components/Navigation';
import FeatureShowcase from '@/components/ProjectGrid';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';
import { Star, Zap, Shield, Sparkles, MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/20">
      <Navigation />
      
      {/* Hero Section */}
      <InteractiveHero />

      {/* Intro Section with Scroll Shading */}
      <Philosophy />

      {/* Featured Features (ProjectGrid) */}
      <FeatureShowcase />

      {/* High-End Feature Details Section (Services) */}
      <section id="services" className="py-24 md:py-48 px-6 md:px-12 bg-secondary/20 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Descriptive Content */}
            <div className="w-full lg:w-1/2 space-y-32">
              <div className="max-w-md">
                <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-accent" /> Intelligence
                </p>
                <div className="group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-background border border-border flex items-center justify-center text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                      <Sparkles size={28} />
                    </div>
                    <h3 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter leading-none">
                      Gratitude <br /> <span className="italic">Prompts</span>
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Never face a blank page. Our AI-driven engine provides unique and thoughtful prompts to inspire gratitude and guide your daily reflection with poetic precision.
                  </p>
                  <button className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold group/btn">
                    Explore Prompts <MoveRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="max-w-md">
                <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-accent" /> Privacy
                </p>
                <div className="group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-background border border-border flex items-center justify-center text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <Shield size={28} />
                    </div>
                    <h3 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter leading-none">
                      Secure <br /> <span className="italic">Sanctuary</span>
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Your inner world is yours alone. With end-to-end encryption and local-first storage, your entries remain for your eyes only, protected by the highest digital standards.
                  </p>
                  <button className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold group/btn">
                    Learn about Security <MoveRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Component (Sticky on Desktop) */}
            <div className="w-full lg:w-1/2">
              <div className="lg:sticky lg:top-32">
                <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-background rounded-[3rem] md:rounded-[5rem] border border-border/50 p-8 md:p-16 flex flex-col items-center justify-center text-center group transition-all duration-700 hover:border-accent/30 overflow-hidden shadow-2xl shadow-accent/5">
                   {/* Abstract Background Animation */}
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)] animate-pulse" />
                   <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
                   
                   <div className="relative z-10">
                    <div className="text-8xl md:text-[10rem] font-headline text-accent/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                      AURA
                    </div>
                    <div className="text-7xl md:text-9xl font-headline text-foreground mb-8 animate-pulse select-none relative z-20">
                      Mood
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40 mb-12">Dynamic Tracking Engine</p>
                    
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
                        {[
                          { color: 'bg-accent', label: 'Calm' },
                          { color: 'bg-blue-400', label: 'Focused' },
                          { color: 'bg-orange-400', label: 'Joy' },
                          { color: 'bg-emerald-400', label: 'Peace' }
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-3 group/item">
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${item.color} opacity-20 border border-white/20 group-hover/item:scale-110 group-hover/item:opacity-100 transition-all duration-500 cursor-pointer shadow-lg shadow-black/5`} />
                            <span className="text-[8px] uppercase tracking-widest opacity-0 group-hover/item:opacity-40 transition-opacity">{item.label}</span>
                          </div>
                        ))}
                    </div>
                   </div>

                   {/* Floating Tech Detail */}
                   <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-border/20 pt-8 opacity-40">
                      <div className="text-left">
                        <p className="text-[8px] uppercase tracking-widest mb-1">Status</p>
                        <p className="text-[10px] font-bold">Optimized</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] uppercase tracking-widest mb-1">Version</p>
                        <p className="text-[10px] font-bold">AURA 2.5.0</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Entry Management Section */}
      <section id="studio" className="py-24 md:py-48 px-6 md:px-12 bg-background border-y border-border/50">
        <div className="container mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-12">Control</p>
          <h2 className="font-headline text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-12 max-w-4xl">
            Complete <span className="italic">Entry</span> Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full mt-12 md:mt-24">
            <div className="p-10 md:p-12 border border-border rounded-[3rem] hover:bg-secondary/50 transition-all duration-500 group">
              <Zap className="w-10 h-10 text-accent mb-8 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="font-headline text-2xl uppercase tracking-tighter mb-4">Fast View</h4>
              <p className="text-muted-foreground leading-relaxed">Instantly revisit any entry with lightning-fast search and semantic filtering.</p>
            </div>
            <div className="p-10 md:p-12 border border-border rounded-[3rem] hover:bg-secondary/50 transition-all duration-500 group">
              <Star className="w-10 h-10 text-accent mb-8 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="font-headline text-2xl uppercase tracking-tighter mb-4">Edit & Refine</h4>
              <p className="text-muted-foreground leading-relaxed">Life evolves, and so can your reflections. Update entries as your perspective shifts over time.</p>
            </div>
            <div className="p-10 md:p-12 border border-border rounded-[3rem] hover:bg-secondary/50 transition-all duration-500 group">
              <Shield className="w-10 h-10 text-accent mb-8 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="font-headline text-2xl uppercase tracking-tighter mb-4">Safe Delete</h4>
              <p className="text-muted-foreground leading-relaxed">Full sovereignty over your data. Permanently remove entries whenever you need a fresh start.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

