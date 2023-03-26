import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

const Admin = () => {       
    const [post, setPost] = useState({
        g: [],
      });
     
      const handleclick = async(userId,id,usertitle,usercomplain) => {
 
        const update= await axios.put(`https://localhost:7153/api/Complaints/${id}`,{
          id: id,
          title: usertitle,
          complain: usercomplain,
          resolve: true,
          userId: userId,
        })
      };
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
          <div>
            <h3>{add.title}</h3>
            <h6>{add.complain}</h6>
            <Button onClick={()=>handleclick(add.userId,add.id,add.title,add.complain)}>Primary</Button>
          </div> 
      </div>
     ))}
</>
  )
}

export default Admin
