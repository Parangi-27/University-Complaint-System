import React, { useState, useEffect } from 'react'

const Content = () => {
    const [complain, setComplain] = useState({
        id: "",
        title: "",
        complain: "",
        user:""
    })

    const path = window.location.pathname
    const array = path.split("/")
    const id = array[2]
    // console.log(id)

    const getData = async() => {
        const data = await fetch("https://localhost:7153/api/Complaints/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const res = await data.json();
        console.log(res)
        setComplain(res)
        // if(res.status === 201){
        //   setMovie(res.detail)
        // }
    }

    useEffect(() => {
        setTimeout(() => {
          getData()
        }, 1000)
      }, [])

  return (
    <div>
      <h1>{complain.title}</h1>
      <p>{complain.description}</p>
    </div>
  )
}

export default Content