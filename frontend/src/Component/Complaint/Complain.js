import axios from "axios";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./complain.css";

const AddComplain = () => {
  const storage = localStorage.getItem("usertoken");
  const arr = storage.split("/");
  const token = arr[0];
  const uid = arr[1];
  console.log(uid);
  const [data, setdata] = useState({
    title: "",
    complain: "",
    userId: uid,
  });
  const handleChange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setdata((values) => ({ ...values, [name]: val }));
    console.log(data);
  };

  const handleSubmit = async (e) => {
    const { title, complain } = data;
    e.preventDefault();
    try {
      const d = axios.post("https://localhost:7153/api/Complaints", {
        title,
        complain,
        uid,
      });
      console.log("pppppp");
      console.log(d);
      const u = d.data;
      console.log(u);
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
          <TextField id="standard-basic" label="Title" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
    // <div>
    //   <br></br>
    //   <form onSubmit={handlesubmit}className="complain">
    //     <span>title</span>
    //     <input
    //       type="text"
    //       name="title"
    //       required
    //       value={data.title}
    //       onChange={handleChange}
    //     />
    //     <span>complain</span>
    //     <input
    //       type="textarea"
    //       name="complain"
    //       required
    //       value={data.complain}
    //       onChange={handleChange}
    //     />
    //     <button type="submit"> submit</button>
    //   </form>
    // </div>
  );
};

export default AddComplain;
