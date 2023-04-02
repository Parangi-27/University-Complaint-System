import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import userImg from './c3.png'
import './userpro.css'

function Userprofile() {
  const userInfo = localStorage.getItem("usertoken");
  const array = userInfo.split("/");
  const token = array[0];
  const uid = array[1];
  console.log(uid);
  const [ucomp, uSetcomp] = useState({
    g: [],
  });
  const [user, setUser] = useState();

  const getUsername = () =>
  
  console.log("Inside effect1");
    axios
      .get("https://localhost:7153/api/Users/" +  uid)
      .then((res) => {
        console.log("////***");
        console.log(res.data);
        setUser(res.data.userName);
      })
      .catch((err) => {
        console.log("error in fetching");
      });

  useEffect(() => {
    getUsername();
  }, []);


  useEffect(() => {
    console.log("Inside effect2");
    axios
      .get("https://localhost:7153/Complaints/" + uid)
      .then((res) => {
        uSetcomp({ g: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error in fetching");
      });
  }, []);
  return (
    <>
      <center>
        <h1 className="complain-heading">Your Complaints</h1>
      
      <div className="username">UserName: {user}</div>
      </center>
      {ucomp.g.map((add, i) => (
        <div className="card_container" key={i}>
          <img src={userImg} alt="User" className="image"></img>
          <div className="card_content">
            <h2 className="fontClass">{add.title}</h2>
            <h6>{add.complain}</h6><br></br>
          </div>
        </div>
      ))}
    </>
  );
}

export default Userprofile;
