import React from "react";
import "../Styles/Card.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="card-front" src={card.src} alt="card front" />
        <img
          className="card-back"
          src="/images/honeycomb.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
