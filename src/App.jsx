import React, { useState, useEffect } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import NavbarComponent from './Components/NavbarComponent';
import AboutComponent from './Components/AboutComponent';
import SkillComponent from './Components/SkillComponent';
import ProjectsComponent from './Components/ProjectsComponent';
import ExprienceComponent from './Components/ExprienceComponent';
import ContactUsComponent from './Components/ContactUsComponent';
import FooterComponent from './Components/FooterComponent';
import FloatingActionButtonComponent from './Components/FloatingActionButtonComponent';



const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('header');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const sections = ['header', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>

      {/* Navigation */}
      <NavbarComponent isDark={isDark} activeSection={activeSection} setIsDark={setIsDark} scrollToSection={scrollToSection}/>
      
      {/* Header Section */}
      <HeaderComponent isDark = {isDark} isLoaded={isLoaded}/>

      {/* About Section */}
      <AboutComponent isDark={isDark} isLoaded={isLoaded}/>

      {/* Skills Section */}
      <SkillComponent isDark={isDark} isLoaded={isLoaded}/>
      
      {/* Experience Section */}
      <ExprienceComponent isDark={isDark} isLoaded={isLoaded}/>
      
      {/* Projects Section */}
      <ProjectsComponent isDark={isDark} isLoaded={isLoaded}/>
      
      {/* Contact Section */}
      <ContactUsComponent isDark={isDark} isLoaded={isLoaded} /> 
      
      {/* Footer */}
      <FooterComponent isDark={isDark} isLoaded={isLoaded} />
      
      {/* Floating Action Button */}
      <FloatingActionButtonComponent scrollToSection={scrollToSection} isLoaded={isLoaded}/>
    </div>
  );
};

export default App;