import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WhyWeFounded } from '@/components/WhyWeFounded';
import { About } from '@/components/About';
import { Founders } from '@/components/Founders';
import { FoundersGallery } from '@/components/FoundersGallery';
import { Approach } from '@/components/Approach';
import { OwnerJourney } from '@/components/OwnerJourney';
import { WhatWeLookFor } from '@/components/WhatWeLookFor';
import { Values } from '@/components/Values';
import { Portfolio } from '@/components/Portfolio';
import { ForOwners } from '@/components/ForOwners';
import { SellerFAQ } from '@/components/SellerFAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyWeFounded />
        <About />
        <Founders />
        <FoundersGallery />
        <Approach />
        <OwnerJourney />
        <WhatWeLookFor />
        <Values />
        <Portfolio />
        <ForOwners />
        <SellerFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
