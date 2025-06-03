import React from 'react'
import GradientText from '../Layout/GradientText'
import { Moon, Sun } from 'lucide-react'

const NavbarComponent = ({isDark, activeSection, setIsDark, scrollToSection}) => {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${isDark ? 'bg-gray-900/2' : 'bg-white/0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <GradientText>Portfolio</GradientText>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['header', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:scale-105 ${
                    activeSection === section 
                      ? `text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold` 
                      : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
                >
                  {section === 'header' ? 'Home' : section}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-yellow-400'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
  )
}

export default NavbarComponent