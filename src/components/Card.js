import React from "react";
import "../Styles/Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="card-front" src={card.src} alt="card front" />
        <img
          className="card-back"
          src="/images/honeycomb.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
