import React from "react";
import { useState, axios } from "react";
import here from "./img1.jpg";
import Button from "../Button";
import bgImg from "./bg.png";
import styles from "./login.css";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const myStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor:"#0c162c",
  };
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    console.log(data);
    if (username === "" || password === "") {
      console.log("Required!!!");
    } else if (username === "adminHere" && password === "Admin@123") {
      localStorage.setItem("admintoken", "adminHere");
      navigate("/admin");
      console.log("Yeeeyyy Admin");
    } else {
      const data = await fetch("https://localhost:7153/api/Auth/Login", {
        method: "POST",
        withCredentials: true,
        Credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const res = data.json();
      res
        .then(function (result) {
          console.log("////");
          console.log(result);

          if (result.status === 200) {
            localStorage.setItem("usertoken", result.token);
            navigate("/home");
            console.log("Yeeeyyy");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(res)
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <img src={here} className="login__img"></img>
        <div className="login__right">
          <center>
            <div className="font">DUComplaint</div>
          </center>
          <h3>Login to your account</h3>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <br />
          {/* <button type="submit">Login</button> */}
          <Button name="Login" ></Button>
        </div>
      </form>
      
    </>
  );
};

export default Login;
