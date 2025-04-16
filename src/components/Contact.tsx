
import { useState } from 'react';
import { Mail, Send, MessageSquare, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 mb-6">
              I'm always open to discussing new projects, opportunities, or collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-portfolio-light text-portfolio-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-portfolio-dark">Email</p>
                  <a href="mailto:contact@aaravmehta.com" className="text-gray-600 hover:text-portfolio-primary">
                    contact@aaravmehta.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-portfolio-light text-portfolio-primary">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-medium text-portfolio-dark">Social Media</p>
                  <div className="flex gap-2 mt-1">
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-portfolio-primary"
                    >
                      LinkedIn
                    </a>
                    <span className="text-gray-400">•</span>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-portfolio-primary"
                    >
                      GitHub
                    </a>
                    <span className="text-gray-400">•</span>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-portfolio-primary"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-primary text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Let's talk about your project!</h3>
              <p className="opacity-90 mb-4">
                Looking for a skilled developer to bring your idea to life? I'm here to help turn your vision into reality.
              </p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-portfolio-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-portfolio-dark mb-4">Send a Message</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md flex items-start gap-3">
                <div className="mt-0.5">✓</div>
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-4 flex items-start gap-3">
                    <AlertCircle size={18} className="mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
