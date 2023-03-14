import React from 'react'

function Card() {
  return (
    <>
        <div className='card'>
          <input type='text' name='title' value='title'></input>
          <input type='textarea' name='des' value='description'></input>    
        </div>
    </>    
  )
}

export default Card