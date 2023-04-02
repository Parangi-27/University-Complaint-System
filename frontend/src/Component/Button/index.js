import React from "react";
import { useNavigate } from "react-router-dom";
import './button.css'
const Button = ({ name = "name", onClick }) => {
  const Nav = useNavigate();
  const onButtonClick = () => {
    Nav("/complain");
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
