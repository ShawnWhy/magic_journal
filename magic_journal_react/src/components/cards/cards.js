//import jquery

import React, { useState, useContext, useEffect } from "react";
// import $ from "jquery";
import "./cards.css";
import { MyContext } from "../../contexts/myContext";
import API from "../../utils/API";
import ace_of_swords from "../../public/images/cards/ace of swords.jpg";
import two_of_swords from "../../public/images/cards/2 of swords.jpg";
import three_of_swords from "../../public/images/cards/3 of swords.jpg";
import four_of_swords from "../../public/images/cards/4 of swords.jpg";
import five_of_swords from "../../public/images/cards/5 of swords.jpg";
import six_of_swords from "../../public/images/cards/6 of swords.jpg";
import seven_of_swords from "../../public/images/cards/7 of swords.jpg";
import eight_of_swords from "../../public/images/cards/8 of swords.jpg";
import nine_of_swords from "../../public/images/cards/9 of swords.jpg";
import ten_of_swords from "../../public/images/cards/10 of swords.jpg";
import page_of_swords from "../../public/images/cards/page of swords.jpg";
import knight_of_swords from "../../public/images/cards/knight of swords.jpg";
import queen_of_swords from "../../public/images/cards/queen of swords.jpg";
import king_of_swords from "../../public/images/cards/king of swords.jpg";
import ace_of_wands from "../../public/images/cards/ace of wands.jpg";
import two_of_wands from "../../public/images/cards/2 of wands.jpg";
import three_of_wands from "../../public/images/cards/3 of wands.jpg";
import four_of_wands from "../../public/images/cards/4 of wands.jpg";
import five_of_wands from "../../public/images/cards/5 of wands.jpg";
import six_of_wands from "../../public/images/cards/6 of wands.jpg";
import seven_of_wands from "../../public/images/cards/7 of wands.jpg";
import eight_of_wands from "../../public/images/cards/8 of wands.jpg";
import nine_of_wands from "../../public/images/cards/9 of wands.jpg";
import ten_of_wands from "../../public/images/cards/10 of wands.jpg";
import page_of_wands from "../../public/images/cards/page of wands.jpg";
import knight_of_wands from "../../public/images/cards/knight of wands.jpg";
import queen_of_wands from "../../public/images/cards/queen of wands.jpg";
import king_of_wands from "../../public/images/cards/king of wands.jpg";
import ace_of_pentacle from "../../public/images/cards/ace of pentacle.jpg";
import two_of_pentacle from "../../public/images/cards/2 of pentacle.jpg";
import three_of_pentacle from "../../public/images/cards/3 of pentacle.jpg";
import four_of_pentacle from "../../public/images/cards/4 of pentacle.jpg";
import five_of_pentacle from "../../public/images/cards/5 of pentacle.jpg";
import six_of_pentacle from "../../public/images/cards/6 of pentacle.jpg";
import seven_of_pentacle from "../../public/images/cards/7 of pentacle.jpg";
import eight_of_pentacle from "../../public/images/cards/8 of pentacle.jpg";
import nine_of_pentacle from "../../public/images/cards/9 of pentacle.jpg";
import ten_of_pentacle from "../../public/images/cards/10 of pentacle.jpg";
import page_of_pentacle from "../../public/images/cards/page of pentacle.jpg";
import knight_of_pentacle from "../../public/images/cards/knight of pentacle.jpg";
import queen_of_pentacle from "../../public/images/cards/queen of pentacle.jpg";
import king_of_pentacle from "../../public/images/cards/king of pentacle.jpg";
import ace_of_cups from "../../public/images/cards/ace of cups.jpg";
import two_of_cups from "../../public/images/cards/2 of cups.jpg";
import three_of_cups from "../../public/images/cards/3 of cups.jpg";
import four_of_cups from "../../public/images/cards/4 of cups.jpg";
import five_of_cups from "../../public/images/cards/5 of cups.jpg";
import six_of_cups from "../../public/images/cards/6 of cups.jpg";
import seven_of_cups from "../../public/images/cards/7 of cups.jpg";
import eight_of_cups from "../../public/images/cards/8 of cups.jpg";
import nine_of_cups from "../../public/images/cards/9 of cups.jpg";
import ten_of_cups from "../../public/images/cards/10 of cups.jpg";
import page_of_cups from "../../public/images/cards/page of cups.jpg";
import knight_of_cups from "../../public/images/cards/knight of cups.jpg";
import queen_of_cups from "../../public/images/cards/queen of cups.jpg";
import king_of_cups from "../../public/images/cards/king of cups.jpg";
import card_back from "../../public/images/cards/card-back.jpg";
import The_Fool from "../../public/images/cards/The Fool.jpg";
import The_Empress from "../../public/images/cards/The Empress.jpg";
import The_Emperor from "../../public/images/cards/The Emperor.jpg";
import The_Hierophant from "../../public/images/cards/The Hierophant.jpg";
import The_Magician from "../../public/images/cards/The Magician.jpg";
import The_High_Priestess from "../../public/images/cards/The High Priestess.jpg";
import The_World from "../../public/images/cards/The World.jpg";
import The_Lovers from "../../public/images/cards/The Lovers.jpg";
import The_Hermit from "../../public/images/cards/The Hermit.jpg";
import The_Wheel_of_Fortune from "../../public/images/cards/The Wheel of Fortune.jpg";
import Death from "../../public/images/cards/Death.jpg";
import The_Devil from "../../public/images/cards/The Devil.jpg";
import The_Tower from "../../public/images/cards/The Tower.jpg";
import Justice from "../../public/images/cards/Justice.jpg";
import Temperance from "../../public/images/cards/Temperance.jpg";
import The_Sun from "../../public/images/cards/The Sun.jpg";
import The_Moon from "../../public/images/cards/The Moon.jpg";
import The_Star from "../../public/images/cards/The Star.jpg";
import Judgement from "../../public/images/cards/Judgement.jpg";
import The_Chariot from "../../public/images/cards/The Chariot.jpg";
import Strength from "../../public/images/cards/Strength.jpg";
import { spread } from "axios";

const cardLibrary = { 
  "ace of swords": ace_of_swords,
  "2 of swords": two_of_swords,
  "3 of swords": three_of_swords,
  "4 of swords": four_of_swords,
  "5 of swords": five_of_swords,
  "6 of swords": six_of_swords,
  "7 of swords": seven_of_swords,
  "8 of swords": eight_of_swords,
  "9 of swords": nine_of_swords,
  "10 of swords": ten_of_swords,
  "page of swords": page_of_swords,
  "knight of swords": knight_of_swords,
  "queen of swords": queen_of_swords,
  "king of swords": king_of_swords,
  "ace of wands": ace_of_wands,
  "2 of wands": two_of_wands,
  "3 of wands": three_of_wands,
  "4 of wands": four_of_wands,
  "5 of wands": five_of_wands,
  "6 of wands": six_of_wands,

  "7 of wands": seven_of_wands,
  "8 of wands": eight_of_wands,
  "9 of wands": nine_of_wands,
  "10 of wands": ten_of_wands,
  "page of wands": page_of_wands,
  "knight of wands": knight_of_wands,
  "queen of wands": queen_of_wands,
  "king of wands": king_of_wands,
  "ace of pentacle": ace_of_pentacle,
  "2 of pentacle": two_of_pentacle,
  "3 of pentacle": three_of_pentacle,
  "4 of pentacle": four_of_pentacle,
  "5 of pentacle": five_of_pentacle,
  "6 of pentacle": six_of_pentacle,
  "7 of pentacle": seven_of_pentacle,
  "8 of pentacle": eight_of_pentacle,
  "9 of pentacle": nine_of_pentacle,
  "10 of pentacle": ten_of_pentacle,
  "page of pentacle": page_of_pentacle,
  "knight of pentacle": knight_of_pentacle,
  "queen of pentacle": queen_of_pentacle,
  "king of pentacle": king_of_pentacle,
  "ace of cups": ace_of_cups,
  "2 of cups": two_of_cups,
  "3 of cups": three_of_cups,
  "4 of cups": four_of_cups,
  "5 of cups": five_of_cups,
  "6 of cups": six_of_cups,
  "7 of cups": seven_of_cups,
  "8 of cups": eight_of_cups,
  "9 of cups": nine_of_cups,
  "10 of cups": ten_of_cups,
  "page of cups": page_of_cups,
  "knight of cups": knight_of_cups,
  "queen of cups": queen_of_cups,
  "king of cups": king_of_cups,
  "The Fool": The_Fool,
  "The Empress": The_Empress,
  "The Emperor": The_Emperor,
  "The Hierophant": The_Hierophant,
  "The Magician": The_Magician,
  "The High Priestess": The_High_Priestess,
  "The World": The_World,
  "The Lovers": The_Lovers,
  "The Hermit": The_Hermit,
  "The Wheel of Fortune": The_Wheel_of_Fortune,
  "Death": Death,
  "The Devil": The_Devil,
  "The Tower": The_Tower,
  "Justice": Justice,
  "Temperance": Temperance,
  "The Sun": The_Sun,
  "The Moon": The_Moon,
  "The Star": The_Star,
  "Judgement": Judgement,
  "The Chariot": The_Chariot,
  "Strength": Strength,
};



const Cards = function(props) {
  //using the main context
  const contextValues = useContext(MyContext);
  const { userProfile, setUserProfile } = contextValues || {};

  let selectedCards = [];


  const clearTable = function() {
    var cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        
      }, index*10);
      card.style.transform = `rotate(0deg)`;
      card.style.opacity = "0";
      card.style.transition = "opacity .3s , transform .3s";
    });
  }


  const selectCard = function (event) { 
    var card = event.target;
    selectedCards.push(card.getAttribute("name"));
    card.style.opacity = "0";
    card.style.transition = "opacity .3s";
    if(spread === "3_card_spread" && selectedCards.length === 3){
      console.log(selectedCards);
    }
    else if(spread === "Celtic_cross" && selectedCards.length === 10){
      console.log(selectedCards);
    }
    else if(spread === "mind_heart_body" && selectedCards.length === 3){
      console.log(selectedCards);
    }
  };


  const [spreadMode, setSpreadMode] = useState("3_card_spread");

  const selectSpread = function (event) {
    if (event.target.value == "3_card_spread") {
      setSpreadMode("3_card_spread");
    } else if (event.target.value == "Celtic_cross") {
      setSpreadMode("Celctic_cross");
    } else if (event.target.value == "mind_heart_body") {
      setSpreadMode("mind_heart_body");
    }
  };

  const mouseOverCard = function (event) {
    var card = event.target;
    card.style.top = "-10px";
  };

  useEffect(() => {
    createCards();
  }, []);

  var majorArcana = [
    "The Fool",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Magician",
    "The High Priestess",
    "The World",
    "The Lovers",
    "The Hermit",
    "The Wheel of Fortune",
    "Death",
    "The Devil",
    "The Tower",
    "Justice",
    "Temperance",
    "The Sun",
    "The Moon",
    "The Star",
    "Judgement",
    "The Chariot",
    "Strength",
    "The Hanged Man",
  ];

  var swords = [
    "ace of swords",
    "2 of swords",
    "3 of swords",
    "4 of swords",
    "5 of swords",
    "6 of swords",
    "7 of swords",
    "8 of swords",
    "9 of swords",
    "10 of swords",
    "page of swords",
    "knight of swords",
    "queen of swords",
    "king of swords",
  ];

  var wands = [
    "ace of wands",
    "2 of wands",
    "3 of wands",
    "4 of wands",
    "5 of wands",
    "6 of wands",
    "7 of wands",
    "8 of wands",
    "9 of wands",
    "10 of wands",
    "page of wands",
    "knight of wands",
    "queen of wands",
    "king of wands",
  ];

  var pentacle = [
    "ace of pentacle",
    "2 of pentacle",
    "3 of pentacle",
    "4 of pentacle",
    "5 of pentacle",
    "6 of pentacle",
    "7 of pentacle",
    "8 of pentacle",
    "9 of pentacle",
    "10 of pentacle",
    "page of pentacle",
    "knight of pentacle",
    "queen of pentacle",
    "king of pentacle",
  ];

  var cups = [
    "ace of cups",
    "2 of cups",
    "3 of cups",
    "4 of cups",
    "5 of cups",
    "6 of cups",
    "7 of cups",
    "8 of cups",
    "9 of cups",
    "10 of cups",
    "page of cups",
    "knight of cups",
    "queen of cups",
    "king of cups",
  ];
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const [shuffledCards, setshuffledCards] = useState([]);
  function rotateCards(cards) {
    var cards = document.querySelectorAll(".card");
    var angle = 220 / cards.length;
    cards.forEach((card, index) => {
      setTimeout(() => {
      card.style.transform = `rotate(${angle * parseFloat(index) - 100}deg)`;
      card.style.opacity = "1";
      // card.style.transitionDelay = `${index * 0.5}s`;
      }, index * 20);
    });
  }
  function createCards() {
    var cards = majorArcana
      .concat(swords)
      .concat(wands)
      .concat(pentacle)
      .concat(cups);
    shuffleArray(cards);
    var randomCards = [];
    cards.forEach((element, index) => {
      var card = {};
      card.name = element;
      //random integer between 0 and 1
      var random = Math.floor(Math.random() * 2);
      //if random is 0
      if (random === 0) {
        //add the element to the shuffled cards array
        card.orientation = "up";
      } else {
        //add the element to the beginning of the shuffled cards array
        card.orientation = "down";
      }
      // card.rotation = angle * parseFloat(index) - 100;
      card.rotation = 0;
      console.log(card.name);
      console.log(The_Chariot);
      console.log(element.replace(/ /g, "_"));
      card.image = cardLibrary[element];
      // setTimeout(() => {
      randomCards.push(card);
      setTimeout(() => {
        rotateCards(randomCards);
      }, 100);
    });

    setshuffledCards(randomCards);
    console.log(cards);
  }

  // const handleInputChange = function (event) {
  //   const { name, value } = event.target;
  //   // console.log(name, value);
  //   setNewItem({ ...newItem, [name]: value });
  // };

  return (
    <div className="row table">
      <div className="cardContainer">
        {shuffledCards.map((card, index) => (
          <div
            className="col-md-2 card"
            key={index}
            name={card.name}
            style={{
              transform: `rotate(${card.rotation}deg)`,
              // transitionDelay: `${index * .0001}s`,
            }}
          >
            <div className="card-back">
              <img src={card_back} alt="card-back"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  


export default Cards;