import { Shield, Heart, Award, Clock, Users } from 'lucide-react';
import { useState } from 'react';

export const Values = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // Circular positions for 5 items (in degrees, starting from top)
  const positions = [
    { angle: -90, radius: 42 },   // Top
    { angle: -18, radius: 42 },   // Top right
    { angle: 54, radius: 42 },    // Bottom right
    { angle: 126, radius: 42 },   // Bottom left
    { angle: 198, radius: 42 },   // Top left
  ];

  const getPosition = (index: number) => {
    const { angle, radius } = positions[index];
    const radian = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(radian);
    const y = 50 + radius * Math.sin(radian);
    return { x, y };
  };

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

        {/* Circular Layout - Desktop */}
        <div className="hidden lg:block relative max-w-4xl mx-auto mb-16" style={{ height: '600px' }}>
          {/* Center element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-forest flex items-center justify-center shadow-xl">
            <span className="font-serif text-cream text-center text-lg leading-tight px-4">
              Our<br />Values
            </span>
          </div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {values.map((_, index) => {
              const pos = getPosition(index);
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke="hsl(var(--forest))"
                  strokeWidth="1"
                  strokeOpacity={hoveredIndex === index ? 0.4 : 0.15}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* Value circles */}
          {values.map((value, index) => {
            const pos = getPosition(index);
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Value circle */}
                <div
                  className={`
                    relative w-28 h-28 rounded-full bg-background border-2 border-forest/20
                    flex flex-col items-center justify-center cursor-pointer
                    transition-all duration-500 ease-out
                    ${isHovered ? 'scale-110 border-gold shadow-xl bg-forest' : 'hover:border-forest/40'}
                  `}
                >
                  <value.icon 
                    className={`
                      w-7 h-7 mb-1 transition-all duration-500
                      ${isHovered ? 'text-gold scale-110' : 'text-forest'}
                    `}
                  />
                  <span 
                    className={`
                      font-serif text-xs font-medium text-center px-2 transition-colors duration-500
                      ${isHovered ? 'text-cream' : 'text-forest'}
                    `}
                  >
                    {value.title}
                  </span>

                  {/* Pulse ring on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 rounded-full border-2 border-gold/50 animate-ping" />
                  )}
                </div>

                {/* Description tooltip on hover */}
                <div
                  className={`
                    absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4
                    bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-forest/10
                    transition-all duration-300 z-20
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                  `}
                >
                  <p className="text-sm text-muted-foreground text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Layout - Horizontal scroll cards */}
        <div className="lg:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-72 card-elegant group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-forest transition-colors duration-500">
                  <value.icon className="w-5 h-5 text-forest group-hover:text-cream transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-lg font-medium text-forest">
                  {value.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">{value.description}</p>
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
