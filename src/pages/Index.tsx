
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import BlogYoutube from '@/components/BlogYoutube';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Aarav Mehta - Full-Stack Developer";
  }, []);

  return (
    <div className="font-sans antialiased min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <BlogYoutube />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
