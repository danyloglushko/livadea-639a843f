import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import okanaLogo from '@/assets/okana-logo.jpeg';
const navLinks = [{
  label: 'About',
  href: '#about'
}, {
  label: 'Approach',
  href: '#approach'
}, {
  label: 'Values',
  href: '#values'
}, {
  label: 'Portfolio',
  href: '#portfolio'
}, {
  label: 'For Owners',
  href: '#for-owners'
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'}`}>
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={okanaLogo} 
              alt="Livadea Holdings" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border-2 border-cream/20"
            />
            <span className={`font-serif text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isScrolled ? 'text-forest' : 'text-cream'}`}>Livadea Holdings</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => <a key={link.label} href={link.href} className={`text-sm font-medium transition-colors duration-300 link-underline ${isScrolled ? 'text-foreground/80 hover:text-forest' : 'text-cream/90 hover:text-cream'}`}>
                {link.label}
              </a>)}
            <Button variant={isScrolled ? 'elegant' : 'hero'} size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-forest' : 'text-cream'}`}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 top-[72px] bg-cream z-40 animate-fade-in overflow-y-auto">
            <div className="px-8 py-10 flex flex-col gap-1">
              {navLinks.map(link => <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif font-medium text-forest hover:text-forest-dark transition-colors py-4 border-b border-forest/10">
                  {link.label}
                </a>)}
              <Button variant="elegant" size="lg" className="mt-8 w-full" onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
                Contact Us
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};