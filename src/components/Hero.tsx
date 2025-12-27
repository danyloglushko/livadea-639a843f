import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-texas-landscape.jpg';
import { Check, ArrowRight } from 'lucide-react';

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
          <h1 className="heading-display text-cream mb-6 opacity-0 animate-fade-up animation-delay-200 text-balance">
            Stewards for the Long Road.
          </h1>

          {/* Subheadline */}
          <p className="body-large text-cream/90 mb-10 max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-400 leading-relaxed">
            We acquire and operate Central Texas businesses for owners who care what happens next — 
            to their people, their customers, and their legacy.
          </p>

          {/* Supporting Points */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-10 opacity-0 animate-fade-up animation-delay-500">
            <div className="flex items-center gap-2 text-cream/85">
              <Check className="w-4 h-4 text-gold-light flex-shrink-0" />
              <span className="text-sm">Long-term hold. Never flipped.</span>
            </div>
            <div className="flex items-center gap-2 text-cream/85">
              <Check className="w-4 h-4 text-gold-light flex-shrink-0" />
              <span className="text-sm">Employee-first transitions.</span>
            </div>
            <div className="flex items-center gap-2 text-cream/85">
              <Check className="w-4 h-4 text-gold-light flex-shrink-0" />
              <span className="text-sm">Founder-led & confidential.</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 animate-fade-up animation-delay-600">
            <div className="flex flex-col items-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Confidential Conversation
              </Button>
              <span className="text-cream/60 text-xs mt-3">No pressure. No brokers. Just a private intro call.</span>
            </div>
            <button
              onClick={() => document.getElementById('why-we-founded')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 text-cream/90 hover:text-cream transition-colors text-sm font-medium"
            >
              Meet the Founders
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
