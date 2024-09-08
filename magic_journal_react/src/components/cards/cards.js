//import jquery

import React, { useState, useContext } from "react";
import $ from "jquery";
import "./cards.css";
import { myContext } from "../../contexts/myContext";
const Cards = function(props) {
    //using the main context
 const { userProfile, setUserProfile } = useContext(myContext);
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
    "page pf swords",
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
    "8 pf cups",
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




    const handleInputChange = function (event) {
      const { name, value } = event.target;
      // console.log(name, value);
      setNewItem({ ...newItem, [name]: value });
    };

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
                      src={`./images/${card.name}.jpg`}
                      alt={card.name}
                    ></img>
                  </div>
                  <div className="card-back">
                    <img src="./images/card-back.png" alt="card-back"></img>
                  </div>
                  </div>
                  </div>
     
            ))}
          </div>

    )
}
}
  


export default Cards;