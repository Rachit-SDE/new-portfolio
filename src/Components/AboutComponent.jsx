import React from 'react'
import AnimatedCard from '../Layout/AnimatedCard'
import GradientText from '../Layout/GradientText'
import { Code, Users, Zap, Heart } from 'lucide-react';

const AboutComponent = ({isDark, isLoaded}) => {
  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard delay={100} isLoaded={isLoaded}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <GradientText>About Me</GradientText>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
            </div>
          </AnimatedCard>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={200} isLoaded={isLoaded}>
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Crafting Digital Experiences with Code
                </h3>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  I'm a passionate Software Development Engineer with over 5 years of experience building scalable web applications and innovative solutions. My journey in tech started with a curiosity about how things work, and it has evolved into a deep passion for creating software that makes a real impact.
                </p>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  I specialize in full-stack development with expertise in React, Node.js, Python, and cloud technologies. I believe in writing clean, maintainable code and following best practices to deliver high-quality solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { icon: Code, label: "Clean Code", desc: "Writing maintainable & scalable code" },
                    { icon: Zap, label: "Performance", desc: "Optimizing for speed & efficiency" },
                    { icon: Users, label: "Collaboration", desc: "Working effectively in teams" },
                    { icon: Heart, label: "Passion", desc: "Love for continuous learning" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.label}</h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300} isLoaded={isLoaded}>
              <div className="relative">
                <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "50+", label: "Projects Completed", icon: "🎯" },
                      { number: "5+", label: "Years Experience", icon: "⏰" },
                      { number: "20+", label: "Technologies", icon: "💻" },
                      { number: "100%", label: "Client Satisfaction", icon: "⭐" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold">
                          <GradientText>{stat.number}</GradientText>
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
  )
}

export default AboutComponent