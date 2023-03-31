import React from "react";
import './button.css'
const Button = ({ name = "name", onClick }) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  return (
    <>
      <div className="btn">
        <button className="btnName" onClick={onButtonClick}>{name}</button>
      </div>
    </>
  );
};

export default Button;
