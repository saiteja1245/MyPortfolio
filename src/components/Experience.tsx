
import { Briefcase, Calendar } from 'lucide-react';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    title: 'SDE Intern',
    company: 'Optmyzr',
    location: 'Remote',
    duration: 'March 2023 - Present',
    description: [
      'Integrated Google Ads & Bing Ads API to enhance platform functionalities',
      'Developed and enhanced UI components using React, PHP, and CoffeeScript',
      'Collaborated with cross-functional teams to implement new features and improve existing ones',
      'Participated in code reviews and contributed to best practices documentation'
    ],
    technologies: ['React', 'PHP', 'CoffeeScript', 'API Integration', 'UI/UX Design'],
  },
  {
    id: 2,
    title: 'Freelance Developer',
    company: 'Payben Pvt Ltd',
    location: 'Remote',
    duration: 'January 2023 - March 2023',
    description: [
      'Rebuilt the recharge platform with improved user experience and technical architecture',
      'Implemented user agent functionality to expand business capabilities',
      'Designed and developed responsive interfaces for web and mobile applications',
      'Created an MIT App Inventor-based mobile application to complement the web platform'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP', 'MIT App Inventor'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((experience) => (
            <div 
              key={experience.id} 
              className="bg-white rounded-lg shadow-md p-6 lg:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-portfolio-primary"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={18} className="text-portfolio-primary" />
                    <h3 className="text-xl font-bold text-portfolio-dark">{experience.title}</h3>
                  </div>
                  <p className="text-portfolio-primary font-medium mb-2">{experience.company}</p>
                  <p className="text-gray-600 mb-1">{experience.location}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-portfolio-primary mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-portfolio-light text-portfolio-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;
