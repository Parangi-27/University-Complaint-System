import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import here from "./img7.jpg";
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
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register__right">
          <center>
            <h1>UniGrievances</h1>
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
          <button type="submit">Register</button>
        </div>
        <img src={here} className="register__img"></img>
      </form>
    </>
  );
};

export default Register;
