import React from 'react'
import './info.css'
function Info({info}) {
  return (
    <>
    <div className='info'>
        <img src={info.photoUrl}></img>
        <h3 className='name'>{info.infoName}</h3>
        <p className='position'>{info.infoPosition}</p>
        <div className='buttons'>
            <button>
                Email
            </button>
            <button>
                Linked
            </button>
        </div>
    </div>
    </>
  )
}

export default Info