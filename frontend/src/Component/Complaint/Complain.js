import axios from "axios";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Navigate } from 'react-router-dom';
import "./complain.css";

const AddComplain = () => {
  if(localStorage.getItem('admintoken') != null) {
    Navigate('*');
  }
  const storage = localStorage.getItem("usertoken");
  const arr = storage.split("/");
  const token = arr[0];
  const uid = arr[1];
  console.log(uid);
  const [data, setdata] = useState({
    title: "",
    complain: "",
    userId: uid,
    resolve: "false",
  });
  const handleChange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setdata((values) => ({ ...values, [name]: val }));
    console.log(data);
  };

  const handleSubmit = async (e) => {
    const { title, complain,userId, resolve } = data;
    e.preventDefault();
    try {
      const d = axios.post("https://localhost:7153/api/Complaints", {
        title,
        complain,
        userId
      });
      console.log("pppppp");
      console.log(d);
      console.log(d.data);
      window.alert("yesss");
    } catch (e) { 
      console.log(e);
    }
  };
  return (
    <>
      <form className="complain" onSubmit={handleSubmit}>
        <div className="center">
          <center>
            <h1>Raise Complaint!</h1>
          </center>
          <TextField name="title" onChange={handleChange} id="standard-basic" label="Title" /><br/><br/>
          <TextField name="complain" onChange={handleChange} id="standard-basic" label="Description" />
        </div>
        <button type="submit">Complain</button>
      </form>
    </>

  );
};

export default AddComplain;
