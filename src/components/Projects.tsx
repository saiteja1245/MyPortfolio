
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
    title: 'Haldiram\'s - Food Delivery App',
    description: 'A seamless platform for ordering and delivery of Haldiram\'s food, with user-friendly features for easy browsing and transaction management.',
    image: '/Food delivery App.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'],
    liveLink: 'https://example.com/payben',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Weather - Forecasting App',
    description: 'Developed a Weather Forecasting App with real-time updates and interactive, shareable dashboards for visualizing and analyzing weather data.',
    image: '/weather.png',
    technologies: ['HTML', 'CSS', 'JavaScript','React','Tailwind CSS'],
    liveLink: 'https://weather-dashboard-website.vercel.app/',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Flash Shop - Ecommerce Website',
    description: 'Developed Flash Shop, a mobile eCommerce app with intuitive UI, real-time product updates, cart management, and secure checkout functionality.',
    image: '/Flash Shop.png',
    technologies: ['HTML', 'CSS3', 'React'],
    liveLink: 'https://flash-shop-ecommerce-website.vercel.app/',
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'HR - Analysis Dashbooard',
    description: 'Implemented a machine learning algorithm to deliver personalized employee insights and recommendations based on behavioral and performance data.',
    image: '/image.png',
    technologies: ['Tableau','Data Visualization','HR Analytics'],
    githubLink: 'https://github.com/saiteja1245/HR-Analysis-Dashboard',
    category: 'Data Visualization',
  },
  
  {
    id: 5,
    title: 'Quizz App',
    description: 'Developed an interactive quiz app using HTML, CSS, and JavaScript, featuring dynamic question selection, real-time scoring, and a user-friendly interface.',
    image: '/Quiz App.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://quizz-app-lyart.vercel.app/',
    category: 'Web Development',
  },
  {
    id: 6,
    title: 'Credit Score Prediction',
    description: 'Built a machine learning model to predict credit scores based on financial data, leveraging classification algorithms for accurate risk assessment.',
    image: '/Payment Behaviour.png',
    technologies: ['R', 'Machine Learning', 'Predictive Modelling'],
    githubLink: 'saiteja1245/Credit-Score-Prediction',
    category: 'Machine Learning',
  },
 
];

const categories = ['All', 'Web Development', 'Data Visualization', 'Machine Learning'];

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
            href="https://github.com/saiteja1245?tab=repositories" 
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
