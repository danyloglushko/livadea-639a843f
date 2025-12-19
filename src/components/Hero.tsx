import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-texas-landscape.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Central Texas Hill Country landscape at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="eyebrow text-cream/80 mb-6 opacity-0 animate-fade-up">
            Central Texas Family Holding Company
          </p>

          {/* Main Headline */}
          <h1 className="heading-display text-cream mb-8 opacity-0 animate-fade-up animation-delay-200 text-balance">
            Built for the Long Road
          </h1>

          {/* Subheadline */}
          <p className="body-large text-cream/85 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-400">
            Livadea Holdings acquires and operates businesses with a generational mindset — 
            preserving legacies, caring for people, and building something enduring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-600">
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => document.getElementById('for-owners')?.scrollIntoView({ behavior: 'smooth' })}
            >
              For Business Owners
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <div className="w-px h-16 bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0" />
      </div>
    </section>
  );
};
