const AnimatedCard = ({ children, delay = 0, className = "", isLoaded }) => (
    <div 
      className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );


  export default AnimatedCard