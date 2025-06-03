import React from 'react'
import AnimatedCard from '../Layout/AnimatedCard'
import GradientText from '../Layout/GradientText'
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Smartphone, Server, Palette, ArrowRight, Star, Calendar, Building, Trophy, Users, Zap, Heart } from 'lucide-react';
import { experiences } from '../Data/Expriences.data';
const ExprienceComponent = ({isDark, isLoaded}) => {
  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard delay={100} isLoaded={isLoaded}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <GradientText>Work Experience</GradientText>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                My professional journey and key achievements
              </p>
            </div>
          </AnimatedCard>

          <div className="space-y-8 flex justify-between flex-col items-center">
            {experiences.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 200 + 200} isLoaded={isLoaded}>
                <div className={`relative p-8 rounded-[9px] ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl hover:scale-[1.02] transition-all duration-300 max-w-[1000px] ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="absolute top-0 left-0 w-full  h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-[10px]"></div>
                  
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} mb-4`}>
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building size={20} className="text-cyan-500" />
                        <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-[14px] mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                          <Trophy size={16} className="text-yellow-500" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1 text-[12px]">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              <Star size={12} className="text-yellow-500 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default ExprienceComponent