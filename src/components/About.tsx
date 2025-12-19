export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="eyebrow mb-4">About Livadea</p>
            <h2 className="heading-section text-forest mb-8">
              A Family Building Something That Lasts
            </h2>
            <div className="space-y-6 body-regular text-muted-foreground">
              <p>
                Livadea Holdings is a family-owned acquisition company based in the heart of Central Texas. 
                We acquire and operate small to mid-sized businesses with a simple, powerful belief: 
                great companies deserve owners who will steward them for generations, not flip them for a quick return.
              </p>
              <p>
                Our approach is deeply personal. When we partner with a business, we're not just making an 
                investment — we're taking on a responsibility. A responsibility to the people who built it, 
                the employees who make it run, and the customers who depend on it.
              </p>
              <p>
                We're not private equity. We're not looking to maximize short-term profits and move on. 
                We're a family looking to build a legacy of our own by honoring the legacies others have created.
              </p>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '10+', label: 'Years of Business Experience' },
              { number: '∞', label: 'Holding Period' },
              { number: '100%', label: 'Family Owned' },
              { number: '1', label: 'Focus: Your Legacy' },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-elegant text-center"
              >
                <span className="font-serif text-4xl md:text-5xl font-medium text-forest block mb-2">
                  {stat.number}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
