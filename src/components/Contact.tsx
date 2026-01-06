import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Shield, Clock, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out. We'll be in touch within 2 business days.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section ref={ref} id="contact" className="section-padding bg-forest text-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow text-gold-light mb-4">Start a Conversation</p>
            <h2 className="heading-section mb-6">
              Request a Private Intro Call
            </h2>
            <p className="body-large text-cream/80 mb-8">
              If you're a business owner exploring your options, we'd like to hear from you. 
              No pressure, no pitch — just a confidential conversation about what matters to you.
            </p>

            {/* What Happens Next */}
            <div className="bg-cream/5 rounded-lg p-6 mb-8 border border-cream/10">
              <h3 className="font-serif text-lg font-medium mb-4">What happens after you reach out:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-light mt-1 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">We respond within 2 business days — usually faster</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-light mt-1 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">A brief intro call (15–30 min) at your convenience</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-gold-light mt-1 flex-shrink-0" />
                  <span className="text-cream/80 text-sm">Completely confidential — your information stays private</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gold-light" />
                </div>
                <a href="mailto:hi@livadea.com" className="text-cream hover:text-gold-light transition-colors">
                  hi@livadea.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold-light" />
                </div>
                <a href="tel:+12549139875" className="text-cream hover:text-gold-light transition-colors">
                  (254) 913-9875
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold-light" />
                </div>
                <span className="text-cream">Central Texas</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* What to Include Checklist */}
            <div className="bg-cream/5 rounded-lg p-5 mb-6 border border-cream/10">
              <p className="text-sm font-medium text-cream mb-3">Helpful to include (but not required):</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-cream/70 text-sm">
                  <Check className="w-3 h-3 text-gold-light" />
                  <span>Type of business</span>
                </div>
                <div className="flex items-center gap-2 text-cream/70 text-sm">
                  <Check className="w-3 h-3 text-gold-light" />
                  <span>Approximate revenue</span>
                </div>
                <div className="flex items-center gap-2 text-cream/70 text-sm">
                  <Check className="w-3 h-3 text-gold-light" />
                  <span>Location</span>
                </div>
                <div className="flex items-center gap-2 text-cream/70 text-sm">
                  <Check className="w-3 h-3 text-gold-light" />
                  <span>Timeline / motivation</span>
                </div>
              </div>
            </div>

            <div className="bg-cream/5 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-cream/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-cream/70 mb-2">Your Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm text-cream/70 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm text-cream/70 mb-2">Phone (Optional)</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(512) 555-1234"
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm text-cream/70 mb-2">Tell us about your business *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What's your business? Where are you located? What's motivating your interest in a conversation?"
                    rows={4}
                    required
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Request Intro Call
                </Button>

                <p className="text-xs text-center text-cream/50">
                  Your information is confidential and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
