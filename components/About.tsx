import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 mb-6">
            I'm Sai Teja Bobbali, a B.Tech Computer Science student at Lovely Professional University with a strong interest in Data Science, Machine Learning, and Cloud Computing. I enjoy extracting insights from data, building predictive models, and deploying scalable solutions to solve real-world problems.            </p>
            <p className="text-gray-700 mb-6">
              I have hands-on experience in developing responsive web applications and working with modern technologies across both frontend and backend stacks. My academic journey and project work have equipped me with a deep understanding of software development practices and emerging technologies.
            </p>
            <p className="text-gray-700 mb-6">
              I am eager to contribute to innovative tech teams, collaborate on impactful projects, and continuously learn to stay at the forefront of the industry.
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
                  <a href="mailto:saiteja@example.com" className="text-gray-600 hover:text-portfolio-primary">
                    saiteja.bobbalii@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-portfolio-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-portfolio-dark">Phone</p>
                  <a href="tel:+919123456789" className="text-gray-600 hover:text-portfolio-primary">
                    +91 8074218957
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
