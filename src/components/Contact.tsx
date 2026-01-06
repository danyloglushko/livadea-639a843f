import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Calendar, Clock, UserCheck, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className="section-padding bg-forest text-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow text-gold-light mb-4">Start a Conversation</p>
            <h2 className="heading-section mb-6">
              Request a Private Intro Call
            </h2>
            <p className="body-large text-cream/80 mb-8">
              If you're a business owner exploring your options, we'd like to hear from you. 
              No pressure, no pitch — just a confidential conversation about what matters to you.
            </p>

            {/* What Happens Next - Updated for scheduling flow */}
            <div className="bg-cream/5 rounded-lg p-6 mb-8 border border-cream/10">
              <h3 className="font-serif text-lg font-medium mb-4">What happens when you schedule:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-gold-light mt-1 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">Choose a time that works for you</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-light mt-1 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">A brief, private 20–30 minute conversation</span>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-gold-light mt-1 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">We move at your pace — no intermediaries, no pressure</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gold-light" />
                </div>
                <a href="mailto:hi@livadea.com" className="text-cream hover:text-gold-light transition-colors">
                  hi@livadea.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold-light" />
                </div>
                <a href="tel:+12549139875" className="text-cream hover:text-gold-light transition-colors">
                  (254) 913-9875
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold-light" />
                </div>
                <span className="text-cream">Central Texas</span>
              </div>
            </div>
          </div>

          {/* Right - Calendar CTA */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-cream/5 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-cream/10 text-center">
              {/* Timing reassurance */}
              <p className="text-sm text-cream/60 mb-6">
                Many owners book weeks out — whenever feels right to you.
              </p>

              {/* Primary CTA */}
              <a
                href="https://cal.com/livadea/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" size="xl" className="w-full text-lg py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Confidential Intro Call
                </Button>
              </a>

              {/* Microcopy - Key details */}
              <div className="mt-6 space-y-4">
                <p className="text-sm text-cream/70 flex items-center justify-center gap-2 flex-wrap">
                  <span>20–30 minutes</span>
                  <span className="text-cream/30">·</span>
                  <span>No pressure</span>
                  <span className="text-cream/30">·</span>
                  <span>Founder-led</span>
                  <span className="text-cream/30">·</span>
                  <span>Completely confidential</span>
                </p>

                {/* Emotional reassurance line */}
                <p className="text-sm text-cream/50 italic">
                  This is simply a conversation — not a commitment to sell.
                </p>
              </div>

              {/* Confidentiality badge */}
              <div className="mt-8 pt-6 border-t border-cream/10">
                <div className="flex items-center justify-center gap-2 text-cream/50 text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Your information is confidential and will never be shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
