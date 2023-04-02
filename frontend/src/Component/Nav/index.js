import React from "react";
import './nav.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Work</a>
        <a href="#">About</a>
        <div class="dot"></div>
      </nav>
    </>
  );
}

export default Navbar;
