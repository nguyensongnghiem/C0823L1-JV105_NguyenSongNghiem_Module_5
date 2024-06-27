import React from "react";
const moment = require('moment-timezone');
function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.item.imgUrl}></img>
      <div className="card--info">
        <div className="card--city">
          <img className='card--info--icon' style={{height:'10px'}} src="\images\location.png"></img>
          <span className="card--info--location">{props.item.location}</span>
          <a className="card--info--maplink" href={props.item.mapLink}>View on Google</a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--date">
          {moment. props.item.startDate} - {props.item.stopDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
