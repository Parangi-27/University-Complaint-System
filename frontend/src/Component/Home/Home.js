import React from "react";
import Navbar from "../Navbar";
import Card from "../Card";
import Card2 from "../Card2";
import ResponsiveAppBar from "../Navbar";
import { Navigate } from "react-router-dom";
import Button from "../Button";
import bg from "./5.png";
import "./Home.css";

function Home() {
  var user = localStorage.getItem("usertoken");
  console.log(user);

  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundColor:"#0c162c",
    height: "100vh",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle}>
        <br />
        <br />
        <h1>DU<span>Complaint</span></h1>
        <h2>Raise Your Complaint!</h2>
        <Button name="Complaint" />
      </div>
      <div>
        <Card />
      </div>

      {/* <ResponsiveAppBar usern={user} />
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br />
      <Card />  */}
    </>
  );
}

export default Home;
