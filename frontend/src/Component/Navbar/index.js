import React from 'react'
import './javascript'
import './nav.css'
function Index() {
  return (
    <div>
      <>
      <nav class="nav">
	<div class="container">
		<div class="logo">
			<a href="#">Your Logo</a>
		</div>
		<div id="mainListDiv" class="main_list">
			<ul class="navlinks">
				<li><a href="#">About</a></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Contact</a></li>
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
  )
}

export default Index;
