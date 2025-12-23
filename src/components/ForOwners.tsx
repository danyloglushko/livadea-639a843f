import { Button } from '@/components/ui/button';
import businessOwnerMeeting from '@/assets/business-owner-meeting.jpg';

export const ForOwners = () => {
  return (
    <section id="for-owners" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="eyebrow mb-4">For Business Owners</p>
            <h2 className="heading-section text-forest mb-8">
              Your Legacy Deserves More Than a Buyer
            </h2>
            <div className="space-y-6 body-regular text-muted-foreground">
              <p>
                You've spent years — maybe decades — building something meaningful. Your business isn't 
                just a company; it's a reflection of your values, your hard work, and the people who helped 
                you along the way.
              </p>
              <p>
                When you're ready to step back, you want to know it's in good hands. Hands that will 
                honor what you've built. Hands that will take care of your employees. Hands that will 
                serve your customers the way you always have.
              </p>
              <p>
                At Livadea Holdings, we understand what's at stake. We're not looking to strip your 
                business for parts or flip it in a few years. We're looking to become the next 
                generation of owners — people who will carry your legacy forward with the same care 
                and commitment you brought to it.
              </p>
            </div>

            {/* Promise Points */}
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-foreground">We'll preserve the culture you've built</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-foreground">We'll take care of your employees</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-foreground">We'll continue serving your customers with excellence</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-foreground">We'll never sell — this becomes our family's legacy too</p>
              </div>
            </div>

            <div className="mt-10">
              <Button
                variant="elegant"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Have a Conversation
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={businessOwnerMeeting}
                alt="Family-owned small business storefront"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/50 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
