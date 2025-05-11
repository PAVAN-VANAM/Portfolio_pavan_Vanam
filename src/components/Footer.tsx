
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pavan Vanam</h3>
            <p className="text-muted-foreground">
              A passionate developer focused on creating intuitive and dynamic web applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contributions', href: '#contributions' }
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:pavanvanam890@gmail.com@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mail
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/pavan-vanam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/PAVAN-VANAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Pavan Vanam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
