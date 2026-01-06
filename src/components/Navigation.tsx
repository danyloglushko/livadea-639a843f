import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import okanaLogo from '@/assets/okana-logo.jpeg';

const navLinks = [{
  label: 'About',
  href: '#about',
  description: 'Our story & mission'
}, {
  label: 'Approach',
  href: '#approach',
  description: 'How we partner'
}, {
  label: 'Values',
  href: '#values',
  description: 'What guides us'
}, {
  label: 'Portfolio',
  href: '#portfolio',
  description: 'Companies we steward'
}, {
  label: 'For Owners',
  href: '#for-owners',
  description: 'Selling your business'
}];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if ((currentScrollY > 50) !== (lastScrollY.current > 50)) {
        setIsScrolled(currentScrollY > 50);
      }
      lastScrollY.current = currentScrollY;
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'}`}>
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 relative z-50">
              <img 
                src={okanaLogo} 
                alt="Livadea Holdings" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border-2 border-cream/20"
              />
              <span className={`font-serif text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-forest' : 'text-cream'}`}>
                Livadea Holdings
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors duration-300 link-underline ${isScrolled ? 'text-foreground/80 hover:text-forest' : 'text-cream/90 hover:text-cream'}`}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant={isScrolled ? 'elegant' : 'hero'} 
                size="sm" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`lg:hidden p-2 rounded-full transition-all duration-300 relative z-50 ${
                isMobileMenuOpen 
                  ? 'bg-forest text-cream' 
                  : isScrolled 
                    ? 'text-forest hover:bg-forest/10' 
                    : 'text-cream hover:bg-cream/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-forest-dark/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-cream shadow-2xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Decorative header */}
          <div className="h-24 bg-gradient-to-br from-forest to-forest-dark flex items-end px-8 pb-4">
            <p className="text-cream/70 text-sm font-medium">Navigation</p>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-6 flex flex-col">
            {navLinks.map((link, index) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="group flex items-center justify-between py-5 border-b border-forest/10 transition-all duration-300 hover:pl-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div>
                  <span className="text-xl font-serif font-medium text-forest group-hover:text-forest-dark transition-colors">
                    {link.label}
                  </span>
                  <p className="text-sm text-forest/50 mt-0.5">{link.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-forest/30 group-hover:text-forest group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="px-6 mt-4">
            <Button 
              variant="elegant" 
              size="lg" 
              className="w-full shadow-lg" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>

          {/* Footer accent */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-forest via-forest-dark to-forest" />
        </div>
      </div>
    </>
  );
};