import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import oyster from "../images/oyster.png";
import sushi from "../images/sushi.png";
import uni from "../images/uni.png";
import wagyu from "../images/wagyu.png";
import abalone from "../images/abalone.png";
import unagi from "../images/unagi.png";
import "../Styles/Main.css";

const cardImages = [
  { src: oyster, matched: false },
  { src: sushi, matched: false },
  { src: uni, matched: false },
  { src: wagyu, matched: false },
  { src: abalone, matched: false },
  { src: unagi, matched: false },
];

const Main = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uniqid() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // start game on page load
  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="main">
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <div className="score-wrapper">
        <button onClick={shuffleCards}>New Game</button>
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
};

export default Main;
