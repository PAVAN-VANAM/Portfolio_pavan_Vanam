
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      container.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-20 animate-float",
              "bg-gradient-to-br from-primary/20 to-accent/20"
            )}
            style={{
              width: `${Math.random() * 8 + 2}rem`,
              height: `${Math.random() * 8 + 2}rem`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Hi, I'm <span className="gradient-text">Pavan Vanam</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                I build <span className="text-purple-500">creative</span> experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 text-muted-foreground">
              A passionate developer focused on creating intuitive, 
              dynamic web applications with clean code and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects">
              <Button size="lg" className="rounded-full">
                View My Work
              </Button>
              </a>
              <a href='https://drive.google.com/file/d/13i33LvJVIz2urVUbQJFSoLAWORXOI3Mj/view?usp=sharing'>
              <Button size="lg" variant="outline" className="rounded-full">
                Download CV
              </Button>
              </a>
            </div>
          </div>
          
          <div 
            ref={containerRef}
            className="flex-1 p-4 transition-transform duration-200 ease-out"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative h-full glass rounded-2xl overflow-hidden p-8">
                <div className="h-full w-full bg-accent/20 rounded-lg flex items-center justify-center">
                  {/* Replace with your profile image */}
                  <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-white font-bold text-2xl">
                   <img 
  src="./profile.jpeg" 
  alt="Profile"
  className="w-full h-full object-cover object-center rounded-full scale-90"
/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
