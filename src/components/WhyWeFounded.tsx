import foundersImage from '@/assets/founders-california.jpeg';

export const WhyWeFounded = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Why We Founded Livadea
          </h2>
          <p className="font-display text-xl md:text-2xl text-primary italic">
            Built from sacrifice. Guided by stewardship. Committed for generations.
          </p>
        </div>

        {/* Founders Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img
              src={foundersImage}
              alt="The founders of Livadea Holdings"
              className="w-full max-w-md rounded-lg shadow-xl object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10" />
          </div>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8">
          <p className="text-xl text-foreground font-medium">
            Livadea was born from a promise.
          </p>

          <p>
            One of us came to the United States as an immigrant with a single mother who sacrificed everything so her child could have a better future. She worked relentlessly, believed deeply in education, and lived by one simple principle: do the work, and do it right. That work ethic became the foundation of our life.
          </p>

          <p>
            When she passed away in 2024, we made a commitment to honor her legacy — not with words, but with action. Livadea exists to fulfill that promise: to build something meaningful, enduring, and worthy of the sacrifices that made it possible. Not just for us, but for our children, and the families who will trust us with what they've built.
          </p>

          <div className="border-l-4 border-primary/30 pl-6 my-12">
            <p className="text-xl text-foreground font-medium italic">
              Before Livadea, we learned our lessons the hard way.
            </p>
          </div>

          <p>
            In 2018, we started an e-commerce business of our own. It was our first real venture — and our first major failure. We faced debt, operational breakdowns, systems that didn't scale, and leadership decisions with real consequences. It was painful. And it was invaluable. It taught us what business books never can: how fragile companies can be without discipline, how important cash flow really is, and how leadership shows up when things don't go to plan. Those lessons shape how we operate today.
          </p>

          <p>
            For more than a decade, we've worked inside an oil and gas technology startup at the forefront of chemical enhanced oil recovery, advising some of the world's largest energy companies. The work demanded precision, rigor, and respect for decades of research and development rooted in the University of Texas engineering tradition. It taught us what it truly means to be world-class in a niche — to obsess over details, to systemize knowledge, and to earn trust through results. Those same principles now guide how we approach every business we acquire.
          </p>

          <p>
            Alongside this, one of us has spent years serving customers directly and teaching in the classroom — as a middle school educator with a background in nutritional sciences and a master's in education. That experience built a deep respect for people, patience, and the quiet leadership it takes to help others grow. It's where our people-first mindset was forged.
          </p>

          <div className="border-l-4 border-primary/30 pl-6 my-12">
            <p className="text-xl text-foreground font-medium italic">
              Together, these paths shaped a shared belief: great businesses are built by people — and they deserve owners who honor that.
            </p>
          </div>

          <p>
            We didn't create Livadea to build a portfolio. We created it to become stewards — of companies, of teams, and of legacies. When a business becomes part of our family, it stays that way. We don't flip. We don't chase exits. We commit for decades. We show up. We answer our own phones. And we carry forward what matters most to the people who built it.
          </p>

          <p className="text-xl text-foreground font-medium text-center mt-16">
            This is our life's work. And we would be honored to carry your legacy forward.
          </p>
        </div>
      </div>
    </section>
  );
};
