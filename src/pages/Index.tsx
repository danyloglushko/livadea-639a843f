import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Approach } from '@/components/Approach';
import { WhatWeLookFor } from '@/components/WhatWeLookFor';
import { Values } from '@/components/Values';
import { Portfolio } from '@/components/Portfolio';
import { ForOwners } from '@/components/ForOwners';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Approach />
        <WhatWeLookFor />
        <Values />
        <Portfolio />
        <ForOwners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
