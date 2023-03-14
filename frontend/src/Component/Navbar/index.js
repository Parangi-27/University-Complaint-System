import React from "react";
import "./javascript";
import "./nav.css";
function Index() {
  return (
    <div>
      <>
        <nav class="nav">
          <div class="container">
            <div class="logo">
              <a href="#">UniGrievances</a>
            </div>
            <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Raise a Complain</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
              </ul>
            </div>
            <span class="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
		
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="js/scripts.js"></script>
      </>
    </div>
  );
}

export default Index;
