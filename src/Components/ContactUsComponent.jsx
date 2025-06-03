import React from 'react'
import AnimatedCard from '../Layout/AnimatedCard'
import GradientText from '../Layout/GradientText'
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Smartphone, Server, Palette, ArrowRight, Star, Calendar, Building, Trophy, Users, Zap, Heart } from 'lucide-react';

const ContactUsComponent = ({isDark, isLoaded}) => {
  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard delay={100} isLoaded={isLoaded}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <GradientText>Let's Work Together</GradientText>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Ready to start your next project? Let's create something amazing together!
              </p>
            </div>
          </AnimatedCard>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedCard delay={200} isLoaded={isLoaded}>
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Get In Touch
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "alex.chen@email.com", href: "mailto:alex.chen@email.com" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
                    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alexchen", href: "#" }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white">
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <div className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {contact.label}
                        </div>
                        <div className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-6">
                  <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "#", color: "hover:bg-gray-800" },
                      { icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                      { icon: Mail, href: "#", color: "hover:bg-red-500" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:text-white ${isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'} ${social.color}`}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300} isLoaded={isLoaded}>
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Send Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </AnimatedCard>
          </div>

          <AnimatedCard delay={400} isLoaded={isLoaded}>
            <div className="mt-16 text-center">
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${isDark ? 'bg-gray-900' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <Heart size={20} className="text-red-500" />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Made with love using React & Tailwind CSS
                </span>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
  )
}

export default ContactUsComponent