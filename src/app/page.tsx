
import InteractiveHero from '@/components/InteractiveHero';
import Navigation from '@/components/Navigation';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <InteractiveHero />

      {/* Intro Section with Bold Typography */}
      <section className="py-32 px-6 md:px-12 bg-background border-y border-border/50">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-8">Introduction</p>
            <h2 className="font-headline text-4xl md:text-7xl uppercase tracking-tighter leading-[1.1]">
              We craft high-end <span className="italic">digital experiences</span> that challenge the boundaries of design and technology. 
              <span className="opacity-20 ml-4">Empowering brands with a distinct visual voice.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <ProjectGrid />

      {/* Stats/Services Section with Grid Breaking Layout */}
      <section id="services" className="py-32 px-6 md:px-12 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 font-headline text-[25vw] leading-none opacity-[0.02] select-none pointer-events-none -translate-y-1/2 translate-x-1/4">
          CRAFT
        </div>
        
        <div className="container mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-4 space-y-12">
            <div>
              <h3 className="font-headline text-4xl uppercase tracking-tighter mb-4">Design Strategy</h3>
              <p className="text-muted-foreground">Strategic thinking paired with unconventional creativity to define your unique brand positioning.</p>
            </div>
            <div>
              <h3 className="font-headline text-4xl uppercase tracking-tighter mb-4">Web Development</h3>
              <p className="text-muted-foreground">High-performance technical implementations using React, Next.js, and WebGL for immersive interactions.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:mt-24 space-y-12">
            <div>
              <h3 className="font-headline text-4xl uppercase tracking-tighter mb-4">Visual Identity</h3>
              <p className="text-muted-foreground">Comprehensive branding systems that resonate and endure across all physical and digital touchpoints.</p>
            </div>
            <div>
              <h3 className="font-headline text-4xl uppercase tracking-tighter mb-4">Motion Graphics</h3>
              <p className="text-muted-foreground">Dynamic storytelling through fluid animations that captivate and direct user attention.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center">
            <div className="w-full aspect-square border border-border flex flex-col items-center justify-center p-12 text-center bg-background">
               <div className="text-7xl font-headline text-accent mb-4">99%</div>
               <p className="text-xs uppercase tracking-widest font-bold">Awwwards Worthy Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action or Footer */}
      <Footer />
    </main>
  );
}
