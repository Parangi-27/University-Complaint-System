import React from "react";
import cardImg from "./cImage.png";
import { useEffect, useState } from "react";
import axios from "axios";
// import './card.css'
import user from './6.png'
import { useNavigate } from "react-router-dom";

function Card() {
  const [post, setPost] = useState({
    g: [],
  });
  const navigate=useNavigate();
  const [bool ,setBool]=useState(false);
  useEffect(() => {
    console.log("count")
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

  // const getData = () => {
  //   axios.get("https://localhost:7153/api/Complaints/")
  //   .then((getData)=>{
  //     setPost(getData.data);
  //   })
  // }
  const deletecomplain=async(id)=>{
    await axios.delete(`https://localhost:7153/api/Complaints/${id}`).then(()=>{setBool(true)})
  }
  return (
    <>
        {post.g.map((add, i) => (
          <div
          class="h-screen overflow-hidden flex items-center justify-center"
          style={{backgroundColor: "#edf2f7"}}key={i}
          >
          <br></br>
          <div class="flex flex-col justify-center h-screen">
            <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
              <div class="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src={user}
                  alt="tailwind logo"
                  class="rounded-xl"
                />
              </div>
              <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div class="flex justify-between item-center">
                  <p class="text-gray-500 font-medium hidden md:block">
                    Vacations
                  </p>&nbsp;
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p class="text-gray-600 font-bold text-sm ml-1">
                      4.96
                      <span class="text-gray-500 font-normal">(76 reviews)</span>
                    </p>
                  </div>
                  <div class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    Superhost
                  </div> */}
                </div>
                <h3 class="font-black text-gray-800 md:text-3xl text-xl">
                  {add.title}
                </h3>
                <p class="md:text-lg text-gray-500 text-base">
                  {add.complain}
                </p>
                {/* <p class="text-xl font-black text-gray-800">
                  $110
                  <span class="font-normal text-gray-600 text-base">/night</span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
          // <div className="card" key={i}>
          //     <img src={cardImg} className="card__img"></img>
          //     <div >
          //       <h3>{add.title}</h3>
          //       <h6>{add.complain}</h6>
          //     </div>
          //     <h5>{add.resolve}? "true":"false"</h5>
          //     <button onClick={()=>deletecomplain(add.id)}>delete</button>
          // </div>
         ))}
    </>
  );
}

export default Card;
