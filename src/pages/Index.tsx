
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contributions from '@/components/Contributions';
import Footer from '@/components/Footer';

const Index = () => {
  const experienceItems = [
    {
      id: 'exp1',
      date: 'July 2024 - March 2025',
      title: 'Software Developer Engineer Intern',
      subtitle: 'Frost Interactive Private LTD',
      description: 'Leading the development of the company\'s main SaaS product, managing a team of developers, and implementing modern full stack architectural patterns.'
    },
    
  ];

  const educationItems = [
    {
      id: 'edu1',
      date: 'Nov 2021 - July 2025',
      title: 'Computer Science and Engineering',
      subtitle: 'ACE Engineering College',
      description: 'B.Tech in Computer Science and Engineering (CSE) is a 4-year undergraduate program focused on programming, algorithms, computer systems, software development, and emerging technologies like AI and cloud computing.'
    },
    {
      id: 'edu2',
      date: 'June 2019 - March 2021',
      title: 'Intermediata - MPC',
      subtitle: 'Sri Chaitanya Junior College',
      description: 'Studing Deeply about Mathematics , Physics , Chemistry . Qualified by 90.40 %'
    },
    {
      id: 'edu3',
      date: '2019',
      title: 'SSC',
      subtitle: 'Sri Chaitanya High School',
      description: 'Qualifed by 9.5 CGPA'
    }
  ];
  
  // Initialize intersection observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Timeline 
          items={experienceItems} 
          title="Work Experience" 
          id="experience" 
        />
        <Timeline 
          items={educationItems} 
          title="Education" 
          id="education" 
        />
        <Projects />
        <Skills />
        <Contributions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
