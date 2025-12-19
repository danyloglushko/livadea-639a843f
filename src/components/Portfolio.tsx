import { Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Portfolio = () => {
  const portfolioItems = [
    {
      name: 'Coming Soon',
      industry: 'Our First Acquisition',
      description:
        "We are actively seeking our first partnership. If you know a business that might be a great fit, we'd love to hear from you.",
      status: 'seeking',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Portfolio</p>
          <h2 className="heading-section text-forest mb-6">
            Our Family of Businesses
          </h2>
          <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
            We're building a portfolio of exceptional businesses — companies we're honored to steward 
            and committed to growing for generations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-2xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="card-elegant text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
                <Building2 className="w-10 h-10 text-forest/40" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-forest mb-2">
                {item.name}
              </h3>
              <p className="eyebrow text-forest/60 mb-4">{item.industry}</p>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                {item.description}
              </p>
              <Button
                variant="elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
