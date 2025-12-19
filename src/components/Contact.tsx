import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out. We'll be in touch soon.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-forest text-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <div>
            <p className="eyebrow text-gold-light mb-4">Contact Us</p>
            <h2 className="heading-section mb-8">
              Let's Start a Conversation
            </h2>
            <p className="body-large text-cream/75 mb-12">
              Whether you're a business owner considering your options, a fellow investor, 
              or someone who shares our vision — we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Email</p>
                  <a href="mailto:hello@livadeaholdings.com" className="text-cream hover:text-gold-light transition-colors">
                    hello@livadeaholdings.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Phone</p>
                  <a href="tel:+15125551234" className="text-cream hover:text-gold-light transition-colors">
                    (512) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Location</p>
                  <p className="text-cream">Central Texas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-cream/5 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-cream/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-cream/70 mb-2">Your Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  required
                  className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm text-cream/70 mb-2">Email Address</label>
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
                <label className="block text-sm text-cream/70 mb-2">How Can We Help?</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about yourself or your business..."
                  rows={4}
                  required
                  className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                Send Message
              </Button>

              <p className="text-xs text-center text-cream/50">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
