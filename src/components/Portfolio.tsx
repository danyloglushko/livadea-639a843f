import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import okanaLogo from '@/assets/okana-logo.jpg';
import nextPartnership from '@/assets/next-partnership.jpg';

export const Portfolio = () => {
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

        {/* Okana - First Acquisition */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-elegant overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={okanaLogo} 
                  alt="Ōkana - Coffee Alternative" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="eyebrow text-gold mb-2">First Acquisition</p>
                <h3 className="font-serif text-3xl font-medium text-forest mb-3">
                  Ōkana
                </h3>
                <p className="eyebrow text-forest/60 mb-4">Coffee Alternative</p>
                <p className="text-muted-foreground mb-6">
                  Ōkana crafts premium coffee alternatives designed to energize and nourish without the jitters. 
                  We're proud to partner with this innovative brand as our first family business.
                </p>
                <a 
                  href="https://www.drinkokana.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-forest font-medium hover:text-gold transition-colors duration-300"
                >
                  Visit Ōkana
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elegant overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={nextPartnership} 
                  alt="Our Next Partnership - The Road Ahead" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="eyebrow text-gold mb-2">Next Partnership</p>
                <h3 className="font-serif text-3xl font-medium text-forest mb-3">
                  Coming Soon
                </h3>
                <p className="eyebrow text-forest/60 mb-4">The Road Ahead</p>
                <p className="text-muted-foreground mb-6">
                  We are actively seeking our next partnership. If you know a business that might be a great fit, we'd love to hear from you.
                </p>
                <Button
                  variant="elegant"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-fit"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
