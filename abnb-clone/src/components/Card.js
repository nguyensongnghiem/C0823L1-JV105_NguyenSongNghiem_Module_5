import React from "react";

function Card(props) {
  return (
    <div className="card">
        {props.available>0 && <div className='card--badge'>Sold Out</div>}
      <img src={`\\images\\${props.img}`} className="card--img"></img>
      <div className="card-info">
        <img style={{width: '15px'}} src="\images\star.png"></img>
        <span className='gray'>{props.star}</span>
        <span className='gray'>({props.vote}) - </span>
        <span className='gray'>{props.country}</span>
      </div>    
      <p className="card-content">{props.content}</p>
      <p> <b>From ${props.price}</b> / person</p>
    </div>
  );
}

export default Card;

