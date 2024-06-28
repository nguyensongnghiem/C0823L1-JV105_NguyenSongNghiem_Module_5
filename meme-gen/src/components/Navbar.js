import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
        <img className='nav--logo' src='/images/trollface.png' alt='meme'></img>
        <h1 className='nav--title'>Meme Generator</h1>
        <p className='nav--text'>React Courses - Project 3</p>
    </div>
  )
}

export default Navbar