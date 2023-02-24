import React from "react";

const Button = ({ text, saludo, children }) => {
  const saludar = (name, last) => {
    console.log(`${saludo} ${name} ${last}`);
  };

  const handleClick = () => {
    saludar("Benito", "Puerta");
  };

  return (
    <button
      style={{
        color: "red",
        borderColor: "red",
        borderWidth: 3,
        display: "block",
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
