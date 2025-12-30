import { ArrowRight, ExternalLink, Check } from 'lucide-react';
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
            Businesses We Operate
          </h2>
          <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
            We don't just acquire businesses — we run them. Each company in our portfolio 
            receives hands-on attention, long-term investment, and operational support.
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
                <p className="eyebrow text-gold mb-2">Acquired & Operated</p>
                <h3 className="font-serif text-3xl font-medium text-forest mb-2">
                  Ōkana
                </h3>
                <p className="eyebrow text-forest/60 mb-4">Premium Coffee Alternative</p>
                <p className="text-muted-foreground mb-4">
                  Ōkana crafts organic, caffeine-free beverages designed to energize 
                  without the crash. We acquired the brand in 2024 and operate it as 
                  a core part of the Livadea family.
                </p>
                <p className="text-sm text-muted-foreground/80 italic mb-6">
                  While Ōkana is a consumer brand, our acquisition philosophy is the same across 
                  all industries: retain teams, respect founders, and operate with long-term stewardship.
                </p>

                {/* Stewardship Bullets */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Original team retained with expanded roles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Investing in product development and distribution</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Long-term commitment to customer experience</span>
                  </div>
                </div>

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
                <p className="eyebrow text-gold mb-2">Actively Seeking</p>
                <h3 className="font-serif text-3xl font-medium text-forest mb-3">
                  Our Next Partnership
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're looking for our next long-term acquisition — a business with strong 
                  fundamentals, a committed team, and an owner ready for a respectful transition.
                </p>
                <Button
                  variant="elegant"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-fit"
                >
                  Start a Conversation
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
