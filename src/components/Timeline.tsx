
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
  id: string;
}

const Timeline = ({ items, title, id }: TimelineProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const elementsToAnimate = sectionRef.current?.querySelectorAll('.reveal');
    elementsToAnimate?.forEach(el => observer.observe(el));
    
    return () => {
      elementsToAnimate?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} id={id} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center reveal">{title}</h2>
        
        <div className="mt-12 relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />
          
          {items.map((item, index) => (
            <div 
              key={item.id}
              className={cn(
                "relative mb-12 reveal",
                "md:grid md:grid-cols-2 md:gap-8 md:mb-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={cn(
                  "mb-6 md:mb-0",
                  index % 2 === 0 ? "md:text-right" : "md:order-2"
                )}
              >
                <span className="text-sm font-mono tracking-wider text-muted-foreground">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <div className="text-muted-foreground">{item.subtitle}</div>
              </div>
              
              <div className={index % 2 === 0 ? "md:order-2" : ""}>
                <div className="bg-accent/30 p-6 rounded-lg backdrop-blur-sm">
                  {/* Timeline dot - mobile version */}
                  <div className="md:hidden relative pl-8">
                    <div className="timeline-dot" />
                    <div className="timeline-line" />
                    <p>{item.description}</p>
                  </div>
                  
                  {/* Desktop version */}
                  <div className="hidden md:block relative">
                    {/* Timeline center dot */}
                    <div className="absolute top-1/2 -left-[28px] md:-left-[32px] w-6 h-6 rounded-full bg-background border-4 border-primary -translate-y-1/2" />
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
