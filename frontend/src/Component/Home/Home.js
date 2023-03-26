import React from 'react'
import Navbar from '../Navbar'
import Card from '../Card';

function Home() {

  var user = localStorage.getItem("username");
  return (
    <>
      <h2></h2>
      <Navbar />
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br />
      <Card /> 
    </>
  )
}

export default Home