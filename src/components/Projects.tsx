
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Payben – Recharge & Bill Payment Platform',
    description: 'A comprehensive platform for recharges and bill payments with user agent functionality.',
    image: '/placeholder.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP', 'MIT App Inventor'],
    liveLink: 'https://example.com/payben',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Optmyzr – Shareable Dashboards',
    description: 'Interactive and shareable dashboards for data visualization and analysis.',
    image: '/placeholder.svg',
    technologies: ['Tableau', 'SAP', 'DNS', 'SSL', 'CNAME'],
    liveLink: 'https://example.com/optmyzr',
    category: 'Data Visualization',
  },
  {
    id: 3,
    title: 'AI-Based Recommendation System',
    description: 'A machine learning algorithm that provides personalized recommendations based on user behavior.',
    image: '/placeholder.svg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'MongoDB'],
    githubLink: 'https://github.com/',
    category: 'Artificial Intelligence',
  },
  {
    id: 4,
    title: 'Cloud-Based File Management',
    description: 'A secure cloud storage solution with advanced file management capabilities.',
    image: '/placeholder.svg',
    technologies: ['AWS S3', 'Node.js', 'React', 'Express'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/filemanager',
    category: 'Cloud Computing',
  },
];

const categories = ['All', 'Web Development', 'Data Visualization', 'Artificial Intelligence', 'Cloud Computing'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-portfolio-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-portfolio-light text-portfolio-primary px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
