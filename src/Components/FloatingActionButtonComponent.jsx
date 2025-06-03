import { ArrowRight } from 'lucide-react'
import React from 'react'

const FloatingActionButtonComponent = ({scrollToSection, isLoaded}) => {
  return (
    <button
        onClick={() => scrollToSection('header')}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '1000ms' }}
      >
        <ArrowRight size={24} className="rotate-[-90deg]" />
      </button>
  )
}

export default FloatingActionButtonComponent