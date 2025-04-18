
import { Award, ExternalLink } from 'lucide-react';

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential?: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Full Stack Development using Reactjs and Nodejs',
    issuer: 'GeeksForGeeks',
    date: 'July 2024',
    description: 'In-depth training in Full Stack Development, covering both front-end with React.js and back-end with Node.js, including best practices and advanced techniques.',
    credential: 'https://example.com/cert1',
  },
  {
    id: 2,
    title: 'Data Structures and Algorithms',
    issuer: 'Programming Pathshala',
    date: 'June 2024',
    description: 'Comprehensive preparation for technical interviews covering data structures, algorithms, and system design.',
    credential: 'https://example.com/cert2',
  },
  {
    id: 3,
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'October 2024',
    description: 'Comprehensive Cloud Computing course covering everything from foundational concepts to advanced cloud architecture and deployment strategies.',
    credential: 'https://example.com/cert3',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Certifications & Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-portfolio-light text-portfolio-primary flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-portfolio-dark mb-1">{cert.title}</h3>
                  <p className="text-portfolio-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                  
                  {cert.credential && (
                    <a 
                      href={cert.credential} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary"
                    >
                      <ExternalLink size={14} />
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
