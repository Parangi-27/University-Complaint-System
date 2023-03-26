import React from "react";
import cardImg from "./cImage.png";
import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

function Card() {
  const [post, setPost] = useState({
    g: [],
  });
  useEffect(() => {
    axios.get("https://localhost:7153/api/Complaints").then(
      (res) => {
        setPost({ g: res.data });
        console.log(res.data);
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  }, []);
  return (
    <>
        {post.g.map((add, i) => (
          <div className="card" key={i}>
              <img src={cardImg} className="card__img"></img>
              <div >
                <h3>{add.title}</h3>
                <h6>{add.complain}</h6>
              </div>
          </div>
         ))}
    </>
  );
}

export default Card;
