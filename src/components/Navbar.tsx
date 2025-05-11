
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Open Source', href: '#contributions' },
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-background/95 backdrop-blur-md border-b"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-heading hover:text-primary transition-colors">
          <span className="gradient-text">Portfolio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="ml-4 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Toggle menu"
          >
            <div className={cn("w-6 h-0.5 bg-foreground transition-all", isMenuOpen && "rotate-45 translate-y-1.5")} />
            <div className={cn("w-6 h-0.5 bg-foreground my-1.5 transition-all", isMenuOpen && "opacity-0")} />
            <div className={cn("w-6 h-0.5 bg-foreground transition-all", isMenuOpen && "-rotate-45 -translate-y-1.5")} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[60px] p-4 border-t bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="block py-2 text-center text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
