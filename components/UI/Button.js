const Button = ({ children, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full block bg-green p-s2 rounded-md text-white ${classes} hover:opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
