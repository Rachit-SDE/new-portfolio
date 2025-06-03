const GradientText = ({ children, gradient = "from-red-500 via-orange-500 to-blue-600" }) => (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {children}
    </span>
  );
  
export default GradientText