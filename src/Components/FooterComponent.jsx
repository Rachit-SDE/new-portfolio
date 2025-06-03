import React from 'react'
import GradientText from '../Layout/GradientText'
import AnimatedCard from '../Layout/AnimatedCard'
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Smartphone, Server, Palette, ArrowRight, Star, Calendar, Building, Trophy, Users, Zap, Heart } from 'lucide-react';

const FooterComponent = ({isDark, isLoaded}) => {
  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold">
              <GradientText>Alex Chen</GradientText>
            </div>
            
            <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>&copy; 2024 Alex Chen. All rights reserved.</p>
            </div>
            
            <div className="flex gap-4">
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className={`transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default FooterComponent