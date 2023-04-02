import axios from "axios";
import React, { useState } from "react";
import image from "./c5.png";
import Button from "../Button";
import { TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import "./complain.css";

const AddComplain = () => {
  const storage = localStorage.getItem("usertoken");
  const arr = storage.split("/");
  const token = arr[0];
  const uid = arr[1];
  // console.log(uid);
  const date = new Date();
  // console.log(date);

  const [data, setdata] = useState({
    title: "",
    complain: "",
    userId: uid,
    resolve: "false",
    PublishDate: date,
  });
  const handleChange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setdata((values) => ({ ...values, [name]: val }));
    console.log(data);
  };

  const handleSubmit = async (e) => {
    const { title, complain, userId, resolve } = data;
    e.preventDefault();
    try {
      const d = axios.post("https://localhost:7153/api/Complaints", {
        title,
        complain,
        userId,
      });
      console.log(d);
      console.log(d.data);
      window.alert("yesss");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <img src={image} className="login__img"></img>
        <div className="login__right">
          <center>
            <div className="fontC">Complaint</div>
          </center>
          <h3>Add your complaint!</h3>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={data.title}
            required
          />
          <br></br>
          <input type="textarea" placeholder="Description" name="complain" onChange={handleChange}
            value={data.complain}
            required/>
          <br />
          <button type="submit">Complaint</button>
          {/* <Button name="Complain"></Button> */}
        </div>
      </form>

      {/* <form className="complain" onSubmit={handleSubmit}>
        <img src={image} alt="image" />
        <div className="center">
          <center>
            <div className="font">Raise Your Complaint</div>
          </center>
          <TextField
            name="title"
            onChange={handleChange}
            id="standard-basic"
            label="Title"
          />
          <br />
          <br />
          <TextField
            name="complain"
            onChange={handleChange}
            id="standard-basic"
            label="Description"
          />
        </div>
         <button type="submit">Complain</button> 
        <Button name="Post Complaint"></Button> 
  </form> */}
    </>
  );
};

export default AddComplain;
