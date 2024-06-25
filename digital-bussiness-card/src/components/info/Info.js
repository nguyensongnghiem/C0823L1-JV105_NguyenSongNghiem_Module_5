import React from 'react'
import './info.css'
import { BsEnvelope } from "react-icons/bs";
function Info({info}) {
  return (
    <>
    <div className='info'>
        <img src={info.photoUrl}></img>
        <h3 className='name'>{info.infoName}</h3>
        <p className='position'>{info.infoPosition}</p>
        <div className='buttons'>
            <button className='btn btn-email'>
           
                Email
            </button>
            <button className='btn btn-linkedln'>           
                LinkedIn
            </button>
        </div>
    </div>
    </>
  )
}

export default Info