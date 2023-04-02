import React from "react";
import cardImg from "./cImage.png";
import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import user from "./c3.png";
import { useNavigate } from "react-router-dom";

function Card() {
  const [post, setPost] = useState({
    g: [],
  });
  const navigate = useNavigate();
  const [bool, setBool] = useState(false);
  useEffect(() => {
    console.log("count");
    setBool(false);
    axios.get("https://localhost:7153/api/Complaints").then(
      (res) => {
        setPost({ g: res.data });
        console.log(res.data);
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  }, [bool]);

  const deletecomplain = async (id) => {
    await axios
      .delete(`https://localhost:7153/api/Complaints/${id}`)
      .then(() => {
        setBool(true);
      });
  };
  return (
    <>
      <center>
        <h1 className="complain-heading">Complaints</h1>
      </center>
      {post.g.map((add, i) => (
        <div className="card_container" key={i}>
          <img src={user} alt="User" className="image"></img>
          <div className="card_content">
            <h2 className="fontClass">{add.title}</h2>
            <h6>{add.complain}</h6><br/><br/>
            <h6>Publish Date: {add.createdDate}</h6>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
