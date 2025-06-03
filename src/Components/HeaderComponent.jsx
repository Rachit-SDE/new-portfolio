import React from 'react'
import AnimatedCard from '../Layout/AnimatedCard'
import GradientText from '../Layout/GradientText'
import { Github, Linkedin, Twitter, Mail, Download,  ArrowRight,} from 'lucide-react';

const HeaderComponent = ({isDark, isLoaded}) => {
  return (
    <section id="header" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/25 via-blue-900/25 to-green-600/50"></div>
        <div className="max-w-7xl mx-auto px-6 py-25 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={100} isLoaded={isLoaded}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className={`text-5xl lg:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Hi, I'm <GradientText>Rachit Gour</GradientText>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold">
                    <GradientText gradient="from-blue-600 to-purple-600">Software Development Engineer</GradientText>
                  </h2>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Passionate about creating innovative solutions and building scalable applications that make a difference. 1+ years of experience in full-stack development with modern technologies.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                    <Download size={20} />
                       Download CV
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white`}
                  >
                    Get in Touch
                  </button>
                </div>

                <div className="flex gap-6 pt-4">
                  {[
                    { icon: Github, href: "#", color: "hover:text-gray-900 hover:bg-gray-400" },
                    { icon: Linkedin, href: "#", color: "hover:text-blue-800 hover:bg-blue-300" },
                    { icon: Mail, href: "#", color: "hover:text-red-800 hover:bg-red-300" },
                    { icon: Twitter, href: "#", color: "hover:text-red-800 hover:bg-red-300" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} ${social.color}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200} className="relative" isLoaded={isLoaded}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-400 rounded-full p-1 animate-pulse">
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-8xl ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  ⚡
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-lg animate-pulse">
                  🚀
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
  )
}

export default HeaderComponent