
const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
        {children}
      </button>
    );
  };
  
  export default Button