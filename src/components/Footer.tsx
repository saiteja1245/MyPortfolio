
import { Github, Linkedin, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href="#home" className="text-2xl font-display font-bold">
              Aarav<span className="text-portfolio-secondary">Mehta</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-portfolio-secondary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-portfolio-secondary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://youtube.com/@lifewidabi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-300 hover:text-portfolio-secondary transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </nav>
          
          <div id="download" className="mb-8">
            <a 
              href="/aarav-mehta-resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-primary text-white rounded-md hover:bg-portfolio-secondary transition-colors"
            >
              Download Resume
            </a>
          </div>
          
          <div className="text-gray-400 text-sm flex items-center gap-1">
            <p>&copy; {currentYear} Aarav Mehta. All rights reserved.</p>
            <div className="flex items-center gap-1 ml-1">
              <span>Made with</span>
              <Heart size={14} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
