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

const Cards = function(props) {
    //using the main context
  const contextValues = useContext(MyContext);
  const { userProfile, setUserProfile } = contextValues || {};


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
 


    const [shuffledCards, setshuffledCards]= useState([]);

    function createCards() {
    var cards = majorArcana
      .concat(swords)
      .concat(wands)
      .concat(pentacle)
      .concat(cups);
    shuffleArray(cards);
    var randomCards = [];
    cards.forEach((element, index) => {
        var angle = 220 / parseInt(cards.length)
        let card = {};
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
        card.rotation = angle * parseFloat(index) - 100;
        randomCards.push(card);
             
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
      <div class="row">
 
            {shuffledCards.map((card, index) => (
              
              <div
                className="col-md-2 card"
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                  transition: `transform ${index*100}s`,
                }}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img
                    //replace the spaces inbetween the card names with underscores
                    src={`${card.name.replace(/ /g, "_")}`}
                                            alt={card.name}
                    ></img>
                  </div>
                  <div className="card-back">
                    <img src="../../public/images/cards/card-back.jpg" alt="card-back"></img>
                  </div>
                  </div>
                  </div>
     
            ))}
          </div>

    )
}

  


export default Cards;