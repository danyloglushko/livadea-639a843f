import foundersLondon from '@/assets/founders-london.jpeg';
import foundersVienna from '@/assets/founders-vienna.jpeg';
import foundersCalifornia from '@/assets/founders-california.jpeg';

const photos = [
  {
    src: foundersLondon,
    alt: 'The founders exploring London with family',
    location: 'London',
  },
  {
    src: foundersVienna,
    alt: 'The founders together in Vienna',
    location: 'Vienna',
  },
  {
    src: foundersCalifornia,
    alt: 'Family moments in California',
    location: 'California',
  },
];

export const FoundersGallery = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">Real People, Real Relationships</p>
          <h2 className="heading-section text-forest mb-6">
            Built on Family, Grounded in Trust
          </h2>
          <div className="divider-elegant mb-8" />
          <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
            Behind Livadea is a family that values perspective, connection, and the long view. 
            We believe that how you live shapes how you work — and we bring that same care 
            to the businesses and people we partner with.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Subtle overlay with location */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  {photo.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
