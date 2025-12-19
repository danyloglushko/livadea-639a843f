import handshakeImage from '@/assets/handshake.jpg';

export const Approach = () => {
  const steps = [
    {
      number: '01',
      title: 'Thoughtful Acquisition',
      description:
        'We seek out well-run businesses where the owner is ready for transition but wants to ensure their company continues to thrive. No auction processes, no rushed deals.',
    },
    {
      number: '02',
      title: 'Seamless Transition',
      description:
        'We work closely with sellers through an extended transition period, learning the business deeply and ensuring continuity for employees and customers.',
    },
    {
      number: '03',
      title: 'Patient Operation',
      description:
        'We invest in our businesses for the long term. We improve operations thoughtfully, maintain what works, and make decisions with decades in mind — not quarters.',
    },
    {
      number: '04',
      title: 'Generational Stewardship',
      description:
        'Our goal is to hold and grow businesses indefinitely. We measure success not by exit multiples, but by the lasting value we create for all stakeholders.',
    },
  ];

  return (
    <section id="approach" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Approach</p>
          <h2 className="heading-section text-forest mb-6">
            How We Partner with Businesses
          </h2>
          <div className="divider-elegant" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={handshakeImage}
                alt="Business partnership handshake"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-lg -z-10" />
          </div>

          {/* Steps */}
          <div className="space-y-8 order-1 lg:order-2">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <span className="font-serif text-3xl text-accent/50 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-forest mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
