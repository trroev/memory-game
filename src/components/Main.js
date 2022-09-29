import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import "../Styles/Main.css";

const cardImages = [
  { src: "/images/oyster.png" },
  { src: "/images/sushi.png" },
  { src: "/images/uni.png" },
  { src: "/images/wagyu.png" },
];

const Main = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uniqid() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default Main;
