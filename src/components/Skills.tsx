
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-10
    icon?: string;
  }[];
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML & CSS', level: 9 },
        { name: 'JavaScript', level: 9 },
        { name: 'TypeScript', level: 8 },
        { name: 'React', level: 9 },
        { name: 'Next.js', level: 7 },
        { name: 'Tailwind CSS', level: 9 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 8 },
        { name: 'Spring', level: 7 },
        { name: 'MongoDB & Cassandra', level: 7 },
        { name: 'MySQL', level: 6 },
        { name: 'JAVA', level: 8 },
        { name: 'REST APIs', level: 9 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 8 },
        { name: 'Microservice', level: 6 },
        { name: 'CI/CD', level: 7 },
        { name: 'System Design', level: 6 },
        { name: 'Testing', level: 7 },
        { name: 'Agile', level: 8 },
      ],
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
          
          // Animate skill bars
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
            }, index * 100);
          });
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
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center reveal">Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className="reveal"
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="bg-card border rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level * 10}%
                        </span>
                      </div>
                      <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
                        <div 
                          className="skill-bar h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                          data-level={skill.level * 10}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 reveal">
          <div className="bg-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Other Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'UI/UX Design', 'Responsive Design', 'Performance Optimization', 
                'SEO', 'Cross-Browser Compatibility', 'Web Accessibility',
                'Technical Writing', 'Problem Solving', 'Team Collaboration',
                'Project Management', 'Mentoring'
              ].map(skill => (
                <div 
                  key={skill}
                  className="bg-background px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
