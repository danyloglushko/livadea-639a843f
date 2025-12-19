import { Shield, Heart, Award, Clock, Users } from 'lucide-react';

export const Values = () => {
  const values = [
    {
      icon: Shield,
      title: 'Stewardship',
      description:
        'We see ourselves as caretakers, not just owners. Every decision is made with the long-term health of the business and its people in mind.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description:
        'We do what we say. Our word is our bond, and we build relationships on trust, transparency, and honesty.',
    },
    {
      icon: Users,
      title: 'People First',
      description:
        'Behind every great business are great people. We invest in employees, honor their contributions, and create environments where they can thrive.',
    },
    {
      icon: Award,
      title: 'Operational Excellence',
      description:
        'We bring discipline and best practices to help our businesses improve continuously while respecting what already works.',
    },
    {
      icon: Clock,
      title: 'Patience',
      description:
        "We're not in a hurry. We make thoughtful decisions, take a long-term view, and understand that the best things take time to build.",
    },
  ];

  return (
    <section id="values" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Values</p>
          <h2 className="heading-section text-forest mb-6">
            What We Stand For
          </h2>
          <div className="divider-elegant" />
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card-elegant group ${index === values.length - 1 && values.length % 3 === 2 ? 'lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-forest transition-colors duration-500">
                  <value.icon className="w-5 h-5 text-forest group-hover:text-cream transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl font-medium text-forest">
                  {value.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-2xl md:text-3xl text-forest/80 italic leading-relaxed">
            "We're not building a portfolio. We're building a family of businesses 
            we're proud to call our own."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
