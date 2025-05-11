
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="section-heading reveal">About Me</h2>
            <div className="space-y-4 reveal" style={{ transitionDelay: '100ms' }}>
              <p className="text-lg">
                Hello! I'm a passionate developer with a love for creating elegant, 
                efficient solutions to complex problems. My journey in tech started with
                a curiosity about how digital experiences are built, and that curiosity
                has evolved into expertise across multiple domains.
              </p>
              <p className="text-lg">
                I specialize in front-end development with React, building responsive 
                and intuitive user interfaces. I'm also experienced with back-end technologies,
                allowing me to develop full-stack applications that are robust and scalable.
              </p>
              <p className="text-lg">
                When I'm not coding, you might find me contributing to open-source projects,
                writing technical articles, or exploring the latest advancements in web technology.
                I believe in continuous learning and pushing the boundaries of what's possible.
              </p>
              <p className="text-lg">
                I'm passionate about creating accessible, performant, and beautiful digital 
                experiences that solve real problems for users.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 reveal" style={{ transitionDelay: '200ms' }}>
              {[
                { number: '10+', label: 'Months Experience' },
                { number: '10+', label: 'Projects Completed' },
                { number: '2+', label: 'Happy Clients' },
                { number: '2+', label: 'Open Source Contributions' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg",
                    "bg-accent/30 backdrop-blur-sm"
                  )}
                >
                  <span className="text-2xl md:text-3xl font-bold">{stat.number}</span>
                  <span className="text-sm text-center text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative glass rounded-2xl p-6">
                <div className="text-xl font-medium mb-4">Tech I'm passionate about</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'System Design', 'JavaScript', 'TypeScript', 'React', 
                    'Node.js', 'Tailwind CSS', 'RESTAPI', 'JAVA',
                    'DSA', 'Spring' , 'SpringBoot' , 'MongoDB', 'Cassandra', 'MySQL','Hibernate'
                  ].map((tech, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-2 rounded-full bg-background/50 text-sm font-medium text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-xl font-medium mb-4">What I do</div>
                <ul className="space-y-2">
                  {[
                    'Full Stack Development',
                    'Responsive Web Design',
                    'Backend Development',
                    'Performance Optimization',
                    'API Integration',
                    'Code Review & Refactoring'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
