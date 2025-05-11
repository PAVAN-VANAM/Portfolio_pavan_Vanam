
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

interface Contribution {
  id: string;
  project: string;
  description: string;
  link: string;
  tags: string[];
}

const Contributions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const contributions: Contribution[] = [
    {
      id: '1',
      project: 'MERN Blog',
      description: 'Contributed #7 Backend Architecture ReStructure Complete Backend',
      link: 'https://github.com/sharmavikas4/MERN_BLOG/graphs/contributors',
      tags: ['JavaScript', 'Performance', 'Clean Code' , 'Backend']
    },
    
  ];
  
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
    <section ref={sectionRef} id="contributions" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center reveal">Open Source Contributions</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((contribution, index) => (
            <div 
              key={contribution.id}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card h-full rounded-xl border p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{contribution.project}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{contribution.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {contribution.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-accent/50 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="mt-auto" asChild>
                    <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-lg mb-6">
            I'm passionate about giving back to the community and contributing to open source.
            Check out my GitHub for more contributions!
          </p>
          
          <Button variant="default" size="lg" asChild>
            <a href="https://github.com/PAVAN-VANAM" target="_blank" rel="noopener noreferrer">
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
