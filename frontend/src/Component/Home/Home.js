import React from 'react'
import Navbar from '../Navbar'

function Home() {

  var user = localStorage.getItem("username");
  return (
    <>
      <Navbar /> 
      <h2>Zeni</h2>

    </>
  )
}

export default Home