
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-display font-bold text-portfolio-primary">
            Aarav<span className="text-portfolio-dark">Mehta</span>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm py-1 px-2 font-medium hover:text-portfolio-primary transition-colors",
                  activeSection === item.href.substring(1) 
                    ? "text-portfolio-primary border-b-2 border-portfolio-primary" 
                    : "text-gray-600"
                )}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#download" 
              className="btn-primary ml-4 text-sm font-medium"
            >
              Resume
            </a>
          </nav>
          
          {/* Mobile navigation button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-portfolio-dark"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-16 md:hidden transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4 px-4 pt-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base py-2 font-medium border-b border-gray-100",
                activeSection === item.href.substring(1) 
                  ? "text-portfolio-primary" 
                  : "text-gray-600"
              )}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#download" 
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center py-3 mt-4"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
