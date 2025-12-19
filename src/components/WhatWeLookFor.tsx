import { Target, Users, TrendingUp, Shield } from 'lucide-react';

export const WhatWeLookFor = () => {
  const criteria = [
    {
      icon: Target,
      title: 'Established Track Record',
      description: 'Profitable businesses with $1M–$10M in annual revenue and stable cash flow.',
    },
    {
      icon: Users,
      title: 'Strong Team & Culture',
      description: 'Dedicated employees, loyal customers, and a healthy company culture worth preserving.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Potential',
      description: 'Opportunities to thoughtfully expand while maintaining what makes the business special.',
    },
    {
      icon: Shield,
      title: 'Owner-Ready Transition',
      description: 'Sellers who care about what happens next and want a partner, not just a buyer.',
    },
  ];

  const industries = [
    'Manufacturing & Distribution',
    'Business Services',
    'Home Services',
    'Healthcare Services',
    'Specialty Retail',
    'Food & Beverage',
  ];

  return (
    <section className="section-padding bg-forest text-cream">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow text-gold-light mb-4">What We Look For</p>
          <h2 className="heading-section mb-6">The Right Fit Matters</h2>
          <p className="body-large text-cream/75 max-w-2xl mx-auto">
            We're selective because we're committed. When we acquire a business, 
            we're planning to be there for decades — so we look for companies we can truly steward.
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {criteria.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/10 mb-6">
                <item.icon className="w-7 h-7 text-gold-light" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-cream/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="border-t border-cream/15 pt-12">
          <p className="text-center text-sm uppercase tracking-widest text-cream/50 mb-8">
            Industries of Interest
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full border border-cream/20 text-sm text-cream/80 hover:border-gold/50 hover:text-cream transition-colors duration-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
