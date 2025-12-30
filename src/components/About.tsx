import { Shield, Users, MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const trustSignals = [
    { 
      icon: Shield, 
      title: 'Long-Term Hold', 
      description: 'We buy to keep. No flipping, no exit timelines.' 
    },
    { 
      icon: Users, 
      title: 'Employee-First Transition', 
      description: 'Your team is protected. Continuity matters to us.' 
    },
    { 
      icon: MapPin, 
      title: 'Local Central Texas Focus', 
      description: 'We live here, invest here, and operate here.' 
    },
    { 
      icon: ArrowRight, 
      title: 'Simple, Direct Process', 
      description: 'No intermediaries. Founder-to-founder conversations.' 
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow mb-4">About Livadea</p>
            <h2 className="heading-section text-forest mb-8">
              A Family Building Something That Lasts
            </h2>
            <div className="space-y-6 body-regular text-muted-foreground">
              <p>
                Livadea Holdings is a family-owned acquisition firm based in Central Texas. 
                We acquire and operate small-to-mid sized businesses with one guiding principle: 
                the businesses we buy become part of our family — permanently.
              </p>
              <p>
                We're not private equity. We don't have investors demanding returns or exit timelines. 
                When we acquire a business, we're committing to operate it for decades — protecting 
                your employees, serving your customers, and building on the foundation you've created.
              </p>
              <p>
                If you're considering a transition and want to work with people who will respect 
                what you've built, we should talk.
              </p>
            </div>
          </div>

          {/* Right - Trust Signals Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className={`card-elegant p-6 transition-all duration-500`}
                style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms' }}
              >
                <signal.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-serif text-lg font-medium text-forest mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
