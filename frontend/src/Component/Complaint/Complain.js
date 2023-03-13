import axios from 'axios';
import React, { useState } from 'react';

const AddComplain = () => {
    const [data, setdata] =useState(
        {
            title:"",
            complain:"",

        }
    );
     const handleChange = async (event) => {
            const name = event.target.name;
            const val = event.target.value;
            setdata(values => ({ ...values, [name]: val }))
            console.log(data);
          }

    
    const handlesubmit=async(e)=>
    {
        
        const {title,complain}=data;
         e.preventDefault();
         try{
            const d=axios.post("https://localhost:7153/api/Complaints",
            {
                title,
                complain,
            
            })
            console.log("pppppp")
            console.log(d);
            const u=d.data;
            console.log(u);
            window.alert("yesss")
         }catch(e)
         {
            console.log(e);
         }

    }
  return (
    <div>

        <form onSubmit={handlesubmit}>
            <span>title</span>
            <input type="text" name="title" required value={data.title} onChange={handleChange} />
            <span>complain</span>
            <input type="textarea" name="complain" required value={data.complain} onChange={handleChange} />
            <button type="submit"> submit</button>

        </form>
    </div>
  )
}

export default AddComplain