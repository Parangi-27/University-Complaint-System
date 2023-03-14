import React from 'react'
import Navbar from '../Navbar'
import Card from '../Card';

function Home() {

  var user = localStorage.getItem("username");
  return (
    <>
      <h2></h2>
      <Navbar /> 
    </>
  )
}

export default Home