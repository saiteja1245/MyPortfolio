
import { ArrowRight, FileText, Video } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  featured?: boolean;
};

type VideoContent = {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  link: string;
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "A comprehensive guide to understanding and implementing React Hooks in your projects.",
    date: "March 15, 2023",
    link: "https://aaravmehta.hashnode.dev",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how to architect your applications using microservices for better scalability.",
    date: "February 28, 2023",
    link: "https://aaravmehta.hashnode.dev",
  },
  {
    id: 3,
    title: "Machine Learning: From Basics to Advanced",
    excerpt: "A step-by-step journey through machine learning concepts and practical implementations.",
    date: "January 10, 2023",
    link: "https://aaravmehta.hashnode.dev",
  },
];

const videos: VideoContent[] = [
  {
    id: 1,
    title: "Create a Full-Stack Web App in 1 Hour",
    thumbnail: "/placeholder.svg",
    views: "15K",
    link: "https://youtube.com/@lifewidabi",
    featured: true,
  },
  {
    id: 2,
    title: "Python for Beginners: Complete Course",
    thumbnail: "/placeholder.svg",
    views: "8.5K",
    link: "https://youtube.com/@lifewidabi",
  },
  {
    id: 3,
    title: "Ace Your Technical Interviews",
    thumbnail: "/placeholder.svg",
    views: "12K",
    link: "https://youtube.com/@lifewidabi",
  },
];

const BlogYoutube = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Blog & YouTube</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Blog Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-portfolio-dark">Latest Articles</h3>
              <a 
                href="https://aaravmehta.hashnode.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-portfolio-primary hover:text-portfolio-secondary"
              >
                View All <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <a 
                  key={post.id}
                  href={post.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block p-5 rounded-lg transition-all hover:-translate-y-1 ${post.featured ? 'bg-portfolio-light border-l-4 border-portfolio-primary' : 'bg-gray-50 hover:bg-portfolio-light'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-white text-portfolio-primary border border-portfolio-primary flex-shrink-0">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-portfolio-dark mb-2">{post.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* YouTube Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-portfolio-dark">Popular Videos</h3>
              <a 
                href="https://youtube.com/@lifewidabi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-portfolio-primary hover:text-portfolio-secondary"
              >
                View Channel <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="space-y-6">
              {videos.map((video) => (
                <a 
                  key={video.id}
                  href={video.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden shadow-sm transition-all hover:-translate-y-1"
                >
                  <div className="relative">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <div className="ml-1 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-r-0 border-solid border-t-transparent border-b-transparent border-l-portfolio-primary"></div>
                      </div>
                    </div>
                    {video.featured && (
                      <div className="absolute top-2 right-2 bg-portfolio-primary text-white py-1 px-2 rounded text-xs">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white py-1 px-2 rounded text-xs flex items-center gap-1">
                      <Video size={12} /> {video.views} views
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-portfolio-dark">{video.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogYoutube;
