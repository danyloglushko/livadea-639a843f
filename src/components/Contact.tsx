import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Calendar, Clock, UserCheck, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className="section-padding bg-forest text-cream">
      <div className="container-wide">
        {/* Mobile: Stack with CTA first, Desktop: Two columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          
          {/* CTA Card - Shows first on mobile */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-cream/5 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 border border-cream/10 text-center">
              {/* Timing reassurance */}
              <p className="text-sm text-cream/60 mb-5">
                Many owners book weeks out — whenever feels right to you.
              </p>

              {/* Primary CTA */}
              <a
                href="https://cal.com/livadea/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" size="lg" className="w-full text-base sm:text-lg py-5 sm:py-6">
                  <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Schedule a Confidential Intro Call</span>
                </Button>
              </a>

              {/* Microcopy - Key details */}
              <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                {/* Mobile: Stack vertically, Desktop: Inline */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2 text-sm text-cream/70">
                  <span>20–30 minutes</span>
                  <span className="hidden sm:inline text-cream/30">·</span>
                  <span>No pressure</span>
                  <span className="hidden sm:inline text-cream/30">·</span>
                  <span>Founder-led</span>
                  <span className="hidden sm:inline text-cream/30">·</span>
                  <span>Completely confidential</span>
                </div>

                {/* Emotional reassurance line */}
                <p className="text-sm text-cream/50 italic">
                  This is simply a conversation — not a commitment to sell.
                </p>
              </div>

              {/* Confidentiality badge */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-cream/10">
                <div className="flex items-center justify-center gap-2 text-cream/50 text-xs">
                  <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Your information is confidential and will never be shared</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Shows second on mobile */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow text-gold-light mb-3 sm:mb-4">Start a Conversation</p>
            <h2 className="heading-section mb-4 sm:mb-6">
              Request a Private Intro Call
            </h2>
            <p className="body-large text-cream/80 mb-6 sm:mb-8">
              If you're a business owner exploring your options, we'd like to hear from you. 
              No pressure, no pitch — just a confidential conversation about what matters to you.
            </p>

            {/* What Happens Next */}
            <div className="bg-cream/5 rounded-lg p-5 sm:p-6 mb-6 sm:mb-8 border border-cream/10">
              <h3 className="font-serif text-base sm:text-lg font-medium mb-3 sm:mb-4">What happens when you schedule:</h3>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-gold-light mt-0.5 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">Choose a time that works for you</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-light mt-0.5 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">A brief, private 20–30 minute conversation</span>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-gold-light mt-0.5 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">We move at your pace — no intermediaries, no pressure</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold-light" />
                </div>
                <a href="mailto:hi@livadea.com" className="text-cream hover:text-gold-light transition-colors text-sm sm:text-base">
                  hi@livadea.com
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold-light" />
                </div>
                <a href="tel:+12549139875" className="text-cream hover:text-gold-light transition-colors text-sm sm:text-base">
                  (254) 913-9875
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold-light" />
                </div>
                <span className="text-cream text-sm sm:text-base">Central Texas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
