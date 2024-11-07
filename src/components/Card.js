import React from 'react';
import './Card.css';  
function Card(props) {

  return (
    <div className={`card ${props.className}`}>  {}
      <img src={props.imgSrc} alt="Card image" className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;