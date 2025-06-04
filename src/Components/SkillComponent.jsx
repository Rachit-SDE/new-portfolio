import React from 'react'
import AnimatedCard from '../Layout/AnimatedCard'
import GradientText from '../Layout/GradientText'
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Smartphone, Server, Palette, ArrowRight, Star, Calendar, Building, Trophy, Users, Zap, Heart } from 'lucide-react';
import { skills } from '../Data/Skill.Data';

const SkillComponent = ({isDark, isLoaded}) => {
  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard delay={100} isLoaded={isLoaded}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <GradientText>Skills & Technologies</GradientText>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Technologies I work with to bring ideas to life
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-[10px] sm:p-[100px] ">
            {skills.map((skill, index) => (
              <AnimatedCard key={skill.name} delay={index * 100 + 200} isLoaded={isLoaded}>
                <div className={`p-7 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50 custom-shadow shadow-[#cccccc]' } hover:scale-105 transition-all duration-300 group cursor-pointer border ${isDark ? 'border-gray-700 hover:border-orange-500' : 'border-gray-200 hover:border-orange-600'}`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h3>
                    <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} mb-2`}>
                      <div 
                        className={`h-full rounded-full ${skill.color} transition-all duration-1000 delay-300`}
                        style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={600} isLoaded={isLoaded}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Frontend", techs: ["React", "Electron", "Tailwind", "TypeScript", "JavaScript"] },
                { icon: Server, title: "Backend", techs: ["Node.js", "Python", "Express", "PostgreSQL"] },
                { icon: Database, title: "DevOps", techs: ["Docker", "Kubernetes", "CI/CD", "MongoDB"] }
              ].map((category, index) => (
                <div key={category.title} className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} text-center hover:scale-105 transition-all duration-300`}>
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#38389e] to-[#8787e4] rounded-full text-white mb-4">
                    <category.icon size={32} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.techs.map((tech, i) => (
                      <span key={i} className={`inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>
  )
}

export default SkillComponent