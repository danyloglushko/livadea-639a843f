import { Phone, Search, Building, FileText, Handshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Confidential Intro Call',
    description: 'A brief, no-pressure conversation to understand your situation and goals. No commitment required.',
    timing: '15–30 minutes',
  },
  {
    icon: Search,
    number: '02',
    title: 'Getting to Know Each Other',
    description: "We share information openly and see if there's mutual alignment. You set the pace.",
    timing: 'At your comfort',
  },
  {
    icon: Building,
    number: '03',
    title: 'Meeting in Person',
    description: "If it feels right, we visit your business, meet your team, and learn about what you've built.",
    timing: "When you're ready",
  },
  {
    icon: FileText,
    number: '04',
    title: 'Formalizing Next Steps',
    description: 'If we both want to move forward, we outline terms and review details together — always at your pace.',
    timing: 'Flexible',
  },
  {
    icon: Handshake,
    number: '05',
    title: 'Transition & Stewardship',
    description: 'We work together on a smooth handover designed around your timeline and priorities.',
    timing: 'Tailored to you',
  },
];

export const OwnerJourney = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow mb-4">The Process</p>
          <h2 className="heading-section text-forest mb-6">
            What a Conversation Typically Looks Like
          </h2>
          <p className="body-regular text-muted-foreground max-w-2xl mx-auto mb-6">
            Every business and every owner is different. We move at your pace and only proceed when it feels right.
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto">
            Here's a general sense of how conversations unfold — but nothing here is rigid. 
            We follow your lead.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex gap-6 md:gap-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms' }}
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-gold/30 flex items-center justify-center shadow-sm">
                      <step.icon className="w-6 h-6 text-forest" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="card-elegant p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-gold font-medium text-sm">{step.number}</span>
                          <h3 className="font-serif text-xl font-medium text-forest">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                          {step.timing}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Timelines are estimates and vary based on business complexity and your readiness. 
            We never rush — and we never pressure.
          </p>
        </div>
      </div>
    </section>
  );
};
