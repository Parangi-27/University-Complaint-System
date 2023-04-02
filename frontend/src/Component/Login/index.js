import React from "react";
import { useState, axios } from "react";
import { NavLink } from "react-router-dom";
import here from "./logImg2.png";
import Button from "../Button";
import "./login.css";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    }
  };
  return (
    <>
        <form onSubmit={handleSubmit} className="form_login">
          <img src={here} alt="image" className="image"></img>
          <div className="content">
            <center>
              <div className="font">DuComplaint</div>
              <div className="font2">Login</div>
            </center>
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
            <button className="btn">Login</button>
            <center>
            <h6>Don't have an account? <NavLink to='./Register.js'>SignUp</NavLink></h6>
            </center>
            <br />
          </div>
        </form>
    </>
  );
};

export default Login;
