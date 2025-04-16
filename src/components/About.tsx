
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 mb-6">
              I'm Aarav Mehta, a B.Tech Computer Science student at Lovely Professional University with a passion for building innovative, scalable applications. I specialize in Full-Stack Development, Artificial Intelligence, and Cloud Computing.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in technology began with a curiosity to understand how digital solutions can solve real-world problems. Today, I leverage my skills to create efficient and elegant applications that provide seamless user experiences.
            </p>
            <p className="text-gray-700 mb-6">
              When I'm not coding, I enjoy sharing my knowledge through my blog and YouTube channel, where I cover topics ranging from programming tutorials to tech industry insights.
            </p>
            
            <div className="mt-8">
              <a href="#download" className="btn-primary inline-block">Download Resume</a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-portfolio-dark mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-portfolio-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-portfolio-dark">Email</p>
                  <a href="mailto:contact@aaravmehta.com" className="text-gray-600 hover:text-portfolio-primary">
                    contact@aaravmehta.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-portfolio-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-portfolio-dark">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-portfolio-primary">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-portfolio-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-portfolio-dark">Location</p>
                  <p className="text-gray-600">
                    Lovely Professional University, Punjab, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="text-portfolio-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-portfolio-dark">Education</p>
                  <p className="text-gray-600">
                    B.Tech in Computer Science (Currently pursuing)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
