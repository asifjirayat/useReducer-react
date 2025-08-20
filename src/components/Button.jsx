const Button = ({ children, onClick, type }) => {
  let styleClasses = "p-4 rounded cursor-pointer";

  switch (type) {
    case "increment":
      styleClasses += " bg-green-100 text-green-700";
      break;
    case "decrement":
      styleClasses += " bg-red-100 text-red-700";
      break;
    case "reset":
      styleClasses += " bg-stone-100 text-stone-700";
      break;
  }

  return (
    <button onClick={onClick} className={styleClasses}>
      {children}
    </button>
  );
};

export default Button;
