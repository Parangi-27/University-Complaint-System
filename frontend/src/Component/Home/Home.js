import React from 'react'
import Navbar from '../Navbar'
import Card from '../Card';
import ResponsiveAppBar from '../Navbar';
function Home() {

  var user = localStorage.getItem("usertoken");
  console.log(user)
  return (
    <>
      
      <ResponsiveAppBar usern={user} />
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