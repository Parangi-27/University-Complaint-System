import React from 'react'
import Navbar from '../Navbar'
import Card from '../Card';
import ResponsiveAppBar from '../Navbar';
import { Navigate } from 'react-router-dom';
function Home() {
  if(localStorage.getItem('admintoken') != null) {
    Navigate('*');
  }
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