import React from "react";
import Card from "../Card";
import Navbar from "../Nav";
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
    fontWeight:"bold",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle}>
        {/* <Navbar/> */}
        <br />
        <br />
        <h1>Du<span>Complaint</span></h1>
        <h2>Raise Your Complaint!</h2>
        <Button name="Complaint"></Button>
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
