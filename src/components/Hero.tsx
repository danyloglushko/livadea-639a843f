import { Button } from '@/components/ui/button';
import heroImage from '@/assets/heritage-tree.jpg';
import { Heart, Infinity, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ancient oak tree symbolizing roots and longevity in Central Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-gold-light/60" />
            <p className="eyebrow text-gold-light tracking-widest">
              A Family Holding Company in Central Texas
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-6 opacity-0 animate-fade-up animation-delay-200 leading-[1.1] font-medium">
            Your Legacy Deserves<br />
            <span className="text-gold-light">an Owner Who Stays</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream/85 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            We acquire and operate small-to-mid sized businesses — not to flip them, 
            but to steward them for generations. For founders ready to pass the torch 
            to people who will honor what you've built.
          </p>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 opacity-0 animate-fade-up animation-delay-500">
            <div className="flex items-start gap-3 bg-cream/5 backdrop-blur-sm rounded-lg p-4 border border-cream/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center">
                <Infinity className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-cream font-medium text-sm mb-1">Hold Forever</p>
                <p className="text-cream/60 text-xs leading-relaxed">We buy to keep. No exits, no flips — just decades of stewardship.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-cream/5 backdrop-blur-sm rounded-lg p-4 border border-cream/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-cream font-medium text-sm mb-1">People First</p>
                <p className="text-cream/60 text-xs leading-relaxed">Your team is your legacy. We protect jobs and grow careers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-cream/5 backdrop-blur-sm rounded-lg p-4 border border-cream/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-cream font-medium text-sm mb-1">Founder-Led</p>
                <p className="text-cream/60 text-xs leading-relaxed">We answer our own phones. No brokers, no committees — just us.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start opacity-0 animate-fade-up animation-delay-600">
            <div className="flex flex-col">
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="shadow-lg shadow-gold/20"
              >
                Start a Confidential Conversation
              </Button>
              <span className="text-cream/50 text-xs mt-3 ml-1">No brokers. No pressure. Just a quiet conversation.</span>
            </div>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => document.getElementById('why-we-founded')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};
