import React from 'react'
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Smartphone, Server, Palette, ArrowRight, Star, Calendar, Building, Trophy, Users, Zap, Heart } from 'lucide-react';
import { projects } from '../Data/Projects.Data';
import AnimatedCard from '../Layout/AnimatedCard';
import GradientText from '../Layout/GradientText';

const ProjectsComponent = ({isDark, isLoaded}) => {
  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard delay={100} isLoaded={isLoaded}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <GradientText>Featured Projects</GradientText>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Some of my recent work that I'm proud of
              </p>
            </div>
          </AnimatedCard>

          <div className="flex flex-wrap justify-center gap-8 px-4 py-2 sm:px-6 md:px-8 overflow-x-auto ">
            {projects.map((project, index) => (
              <AnimatedCard key={index} delay={index * 200 + 200} isLoaded={isLoaded}>
                <div className={`group w-[300px] sm:w-[550px] lg:w-[440px] xl:w-[560px] flex flex-col min-h-0 rounded-2xl overflow-hidden  ${isDark ? 'bg-gray-800' : 'bg-gray-50'} hover:scale-[1.02] transition-all duration-300 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`flex items-center justify-center text-6xl relative overflow-hidden `}>
                    <img src={project.image} className="relative w-full  object-cover" alt="" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <a href={project.github} target='blank' className="p-[6px] sm:p-[2px] h-[30px] w-[30px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-gray-400/30 backdrop-blur-sm rounded-full text-black transition-all duration-300">
                        <Github size={20} />
                      </a>
                      <a href={project.live} target='blank' className="p-[6px] sm:p-[2px] h-[30px] w-[30px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-gray-400/30 backdrop-blur-sm rounded-full text-black transition-all duration-300">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a href={project.github} target='blank' className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-300">
                        <Github size={18} />
                        Code
                      </a>
                      <a href={project.live} target='blank' className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-300">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProjectsComponent