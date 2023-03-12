import React from "react";
import { useState, axios } from "react";
import here from "./img7.jpg";
import styles from "./register.css";

const Register = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = data;
    console.log(data);

    if (username === "" || password === "") alert("Filled required");
    else {
      try {
        const url = "https://localhost:7261/api/Auth/Register";
        const res = await axios.post(url, data);
        console.log(res.data);
        alert("Yesss");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form className="register-form">
        <div className="register__right">
          <center>
            <h1>UniGrievances</h1>
          </center>
          <h3>Register to your account</h3>
          {/* <h6>Remember that the name you choose should reflect the values and mission of your university, as well as the purpose of the complaint management system. Consider brainstorming with your team to come up with a name that is unique, memorable, and easy to understand.</h6> */}
          <input
            type="text"
            placeholder="Username"
            name="userName"
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
