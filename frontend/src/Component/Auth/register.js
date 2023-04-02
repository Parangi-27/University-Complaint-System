import React from "react";
import { useState } from "react";
import Button from "../Button";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import here from "./logImg2.png";
import styles from "./register.css";

const Register = () => {
  const nav = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {username, password} = data;
    if (data.username === "" || data.password === "") alert("Filled required");
    else {
      console.log("outside try");
      try {
        console.log("inside try");
        const data = await fetch('https://localhost:7153/api/Auth/Register',{
            method: "POST",
          withCredentials: true,
          Credentials:"include",
          headers:{
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*'
          },
          body:JSON.stringify({
              username, password
          })
        });
        localStorage.setItem('username',res.username);
        const res = data;
        if(res.status === 200)
            console.log("Success");
        window.alert("You successfully registerd")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="form_register">
          <img src={here} alt="image" className="image"></img>
          <div className="contentR">
            <center>
              <div className="fontR">DuComplaint</div>
              <div className="fontR2">Register</div>
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
            <button className="btnR">Register</button>
            <br />
            <br />
            <center>
            <h6>Already have an account?&nbsp;<NavLink to='/Login'>Login</NavLink>&nbsp;here</h6>
            </center>
            <br />
          </div>
        </form>
      {/* <form className="register-form" onSubmit={handleSubmit}>
        <div className="register__right">
          <center>
          <div className="font">DUComplaint</div>
          </center>
          <h3>Register to your account</h3>
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
         
          <Button name="Register" ></Button>
        </div>
        <img src={here} className="register__img"></img>
      </form> */}
    </>
  );
};

export default Register;
