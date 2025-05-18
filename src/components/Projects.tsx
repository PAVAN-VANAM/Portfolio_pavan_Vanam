
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // Placeholder or actual image
  demoUrl?: string;
  codeUrl?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'AI - E-commerce Platform',
      description: 'Designed and developed a scalable e-commerce platform that integrates AI-powered Retrieval-Augmented Generation (RAG) for intelligent product recommendations and customer support. The system architecture leverages microservices, GraphQL APIs, and Next.js for server-side rendering and dynamic product pages. Integrated a vector database (like Pinecone/FAISS) with RAG to enable real-time, context-aware query resolution and personalized user interaction.',
      tags: ['React', 'Node.js', 'MongoDB','Qudrant','Express.JS', 'Microservices'],
      imageUrl: './Ecomerce.png',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: '2',
      title: 'Food Ordered System',
      description: 'Engineered a food ordering system for pizza delivery with real-time tracking, dynamic menu customization, and secure checkout. Built with Spring Boot (Java) for backend services, Next.js frontend, and integrated with Apache Kafka, Redis, and Cassandra DB to ensure low-latency and fault tolerance. Focused on high availability and distributed architecture to support spikes in user demand.',
      tags: ['React', 'TypeScript', 'NextJS' , 'Spring' , 'SpringBoot' , 'JAVA' , 'Cassandra' , 'Hibernate', ' Redis' , 'Apache Kafaka'],
      imageUrl: './Food.png',
      demoUrl: '#',
      codeUrl: '#'
    },

  ];
  
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
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
    <section ref={sectionRef} id="projects" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center reveal">Projects</h2>
        
        <div className="flex justify-center mt-8 mb-12 overflow-x-auto py-2 reveal">
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card h-full rounded-xl overflow-hidden border group hover:shadow-lg transition-all duration-300">
                {/* Project image/placeholder */}
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-xl font-medium opacity-30">{project.title}</div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-accent/50 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {project.demoUrl && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </Button>
                    )}
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

export default Projects;
