import React from 'react'
import AnimatedCard from '../Layout/AnimatedCard'
import GradientText from '../Layout/GradientText'
import Resume from '../../public/RACHIT_GOUR_RESUME.pdf'
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight, } from 'lucide-react';
import lightWhatsapp from '../assets/whatsappLight.png'
import darkWhatsapp from '../assets/whatsappDark.png'

const HeaderComponent = ({ isDark, isLoaded }) => {

  const [isWhatsappHovered, setIsWhatsappHovered] = React.useState(false);

  const whatsappIcon = isDark ? lightWhatsapp : darkWhatsapp;

  const whatsappIconToShow = isWhatsappHovered ? lightWhatsapp : (isDark ? lightWhatsapp : darkWhatsapp);

  const socials = [
    { icon: Github, href: "#", color: "hover:text-gray-900 hover:bg-gray-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-800 hover:bg-blue-300" },
    { icon: Mail, href: "#", color: "hover:text-red-800 hover:bg-red-300" },
    { icon: whatsappIconToShow, href: "#", color: "hover:text-green-800 hover:bg-green-200", isImage: true }
  ];

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
                <a
                  href={Resume}
                  download="rachit_gour_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[50px] px-[20px] bg-gradient-to-r from-[#272a42] to-[#300482] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-2 border-2 border-[#300482] text-[#300482] rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#300482] hover:text-white`}
                >
                  Get in Touch
                </button>
              </div>

              <div className="flex gap-6 pt-4">
                {socials.map((social, index) => {
                  const isWhatsapp = social.isImage;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} ${social.color}`}
                      {...(isWhatsapp && {
                        onMouseEnter: () => setIsWhatsappHovered(true),
                        onMouseLeave: () => setIsWhatsappHovered(false)
                      })}
                    >
                      {social.isImage ? (
                        <img src={social.icon} alt="WhatsApp" className="w-6 h-6" />
                      ) : (
                        <social.icon size={24} />
                      )}
                    </a>
                  );
                })}
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
