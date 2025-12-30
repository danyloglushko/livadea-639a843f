import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const ExecutiveSummary = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 bg-background border-b border-border/30">
      <div 
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="eyebrow mb-6">Who We Are — In Plain Terms</p>
        
        <div className="space-y-6 body-regular text-muted-foreground">
          <p className={`text-lg md:text-xl leading-relaxed text-foreground transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Livadea is a Central Texas family holding company that acquires and operates 
            businesses for the long term.
          </p>
          
          <p className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We are not private equity. We don't flip companies or chase exits.
          </p>
          
          <p className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We work directly with owners who care about their people, their customers, 
            and what happens next.
          </p>
        </div>
      </div>
    </section>
  );
};
