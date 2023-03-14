import React from 'react'
import cardImg from "./cImage.png";
import './card.css'

function Card() {
  return (
    <>
        <div className='card'>
        <img src={cardImg} className="card__img"></img>
        <h3>This is title</h3>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h6>
        </div>
    </>    
  )
}

export default Card