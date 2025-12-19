export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream/70 py-16">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-medium text-cream block mb-2">
              Livadea Holdings
            </span>
            <p className="text-sm text-cream/50">
              Stewards of Businesses. Partners to People.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-cream transition-colors">About</a>
            <a href="#approach" className="hover:text-cream transition-colors">Approach</a>
            <a href="#values" className="hover:text-cream transition-colors">Values</a>
            <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© {currentYear} Livadea Holdings LLC. All rights reserved.</p>
          <p>Central Texas</p>
        </div>
      </div>
    </footer>
  );
};
