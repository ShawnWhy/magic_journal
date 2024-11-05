//import jquery

import React, { useState, useContext, useEffect } from "react";
// import $ from "jquery";
import { MyContext } from "../../contexts/myContext";
import "./journal.css";
import API from "../../utils/API";
import sunFace from "../../public/images/sun/sunface.svg"
import sunRay1 from "../../public/images/sun/ray1.svg"
import sunRay2 from "../../public/images/sun/ray2.svg"
import star from "../../public/images/star/star.svg"


const Journal = () => {

  const rotateRaysInitial =function(){
    var SunRays1 = document.getElementsByClassName("Ray1");
    if (SunRays1.length > 0) {
      Array.from(SunRays1).forEach((ray, index) => {
        setTimeout(() => {
          ray.style.transform="transform:rotate(" +index * 30 +"deg)"
          
        }, index * 100);
      });
    }
  }

  const getJournalorDreams = function () {
    var formattedDate = new Date().toISOString().slice(0, 10);
    console.log(formattedDate);
    if (journalMode === "dreams") {
      API.getDreamsbyDate({
        userId: userProfile.id,
        date: formattedDate,
      })
        .then((response) => {
          console.log("dreams gotten");
          console.log(response.data);
          setAllMyJournals(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (journalMode === "journal") {
      API.getJournalsByDate({
        userId: userProfile.id,
        date: formattedDate,
      })
        .then((response) => {
          console.log("journals gotten");
          console.log(response.data);
          setAllMyJournals(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    // createJournalAnimation();
    getJournalorDreams();
    rotateRaysInitial();
  }, []);

  function setDreamSymbolsFunction(e) {
    e.stopPropagation();
    e.preventDefault();
    
    var journalSymbol = document.getElementById("journalSymbolInput").value;
    if (
      journalSymbol.length > 0 &&
      //and journalSymbol is only in letters and numbers
      journalSymbol.match(/^[A-Za-z0-9]*$/)
    ) {
      document.getElementById("journalSymbolInput").value = "";
      setDreamSymbols([...dreamSymbols, journalSymbol]);
      console.log(dreamSymbols);
    }
  }
  const [dreamSymbols, setDreamSymbols] = useState([]);
  var agents = [];

  function onWindowResize(e) {
    console.log(e.target);
    console.log(e.target.innerWidth);
    canvasHeight = e.target.innerHeight + 300;
    canvasWidth = e.target.innerWidth;
  }



  let dotsmove = "on";

  let canvasHeight;
  let canvasWidth;
  let elapsed;
  let now;
  function tick() {
    if (agents.length > 0 && dotsmove == "on") {
      // console.log(waterColor)
      // this.context.fillStyle = this.waterColor;
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      for (let i = 0; i < agents.length; i++) {
        agents[i].update();
        agents[i].draw(context);
        agents[i].bounce(
          canvasWidth / 2,

          canvasHeight / 2
        );
      }
    }
    window.requestAnimationFrame(tick);

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      then = now - (elapsed % fpsInterval);
    }
  }
  let canvas;
  let context;
  let fpsInterval;
  let then;
  let startTime;
  function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    tick();
  }



  function submitJournalOrDream(e) {
    e.preventDefault();
    e.stopPropagation();

    var journalEntry = document.getElementById("journalInput").value;

    if(journalEntry.length>10
    ){
      document.getElementById("journalInput").value='';
      setDreamSymbols([])
      let dateObserve = new Date();
      let year = dateObserve.getFullYear();
      let month = ("0" + (dateObserve.getMonth() + 1)).slice(-2);
      let date = ("0" + dateObserve.getDate()).slice(-2);

      let hours = ("0" + dateObserve.getHours()).slice(-2);
      let minutes = ("0" + dateObserve.getMinutes()).slice(-2);
      let seconds = ("0" + dateObserve.getSeconds()).slice(-2);

      let formatted_date = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;

      var newEntry;
      if (journalMode === "dreams") {
        newEntry = {
          userId: userProfile.id,
          dream: journalEntry,
          symbols: dreamSymbols.toString(),
          //updated at today's date and time with a "T" between date and time
        };
        API.submitDreams(newEntry)
          .then((response) => {
            // If the API call is successful, fire another function
            if (response.status === 200) {
              // Call your other function here
              // functionName();
              console.log("calling the new function");
              newEntry.updatedAt = formatted_date;
              setAllMyJournals([...allMyJournals, newEntry]);

              //route to spread page using the reacr router with props.parameters
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        newEntry = {
          userId: userProfile.id,
          writing: journalEntry,
          symbols: dreamSymbols.toString(),
        };
        API.submitJournal(newEntry)
          .then((response) => {
            // If the API call is successful, fire another function
            if (response.status === 200) {
              // Call your other function here
              // functionName();
              newEntry.updatedAt = formatted_date;
              setAllMyJournals([...allMyJournals, newEntry]);
              console.log("calling the new function");

              //route to spread page using the reacr router with props.parameters
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
  const contextValues = useContext(MyContext);
  const { userProfile, setUserProfile } = contextValues || {};

  const [allMyJournals, setAllMyJournals] = useState([]);
  const [newJournal, setNewJournal] = useState({
    title: "",
    entry: "",
    date: "",
  });
  const journalModes = ["dreams", "journal"];

  const [journalMode, setJournalMode] = useState("journal");

  useEffect(() => {
    // createJournalAnimation();
    getJournalorDreams();
  }, [journalMode]);

  return (
    <div className={"row table " + journalMode}>
      {/* <canvas id="journalCanvas" /> */}
      <div className={"col-12 " + journalMode + " topRow"}>
        <div className="modeSelectJournal">
          {journalModes.map((mode) => (
            <button onClick={() => setJournalMode(mode)}>{mode}</button>
          ))}
        </div>
      </div>
      <div className="formsDiv">
        <div id="recordLabel">record your {journalMode}</div>
        <form
          className="journalForm"
          onSubmit={(e) => {
            submitJournalOrDream(e);
          }}
        >
          <textarea id="journalInput"></textarea>

          <button type="submit">Submit Journal</button>
        </form>
        <form
          id="symbolsForm"
          onSubmit={(e) => {
            setDreamSymbolsFunction(e);
          }}
        >
          <div name="symbolsLable" id="symbolLable">
            symbols
          </div>
          <input id="journalSymbolInput" name="symbols" type="text"></input>

          <button type="submit">Submit Symbol</button>
          <div className="selectedSymbolsDiv">
            {dreamSymbols.length > 0
              ? dreamSymbols.map((symbol) => {
                  return <div>{symbol}</div>;
                })
              : null}
          </div>
        </form>
      </div>
      <div className="listOfEntries">
        {/* if journalmode is journal display all journals*/}

        {journalMode === "dreams"
          ? allMyJournals.map((journal) => {
              let firstNumber;
              let secondNumber;
              let amPm = "AM";
              secondNumber = journal.updatedAt.split("T")[1].split(":")[1];
              firstNumber = journal.updatedAt.split("T")[1].split(":")[0];
              if (parseInt(firstNumber) > 12) {
                amPm = "PM";
                firstNumber = parseInt(firstNumber) - 12;
              } else if (parseInt(firstNumber) === 12) {
                amPm = "PM";
              } else if (parseInt(firstNumber) === 0) {
                firstNumber = 12;
              }
              let symbolsArray = [];
              if (journal.symbols && journal.symbols.length > 0) {
                let symbols = journal.symbols;
                symbolsArray = symbols.split(",");
              }

              return (
                <div style={{ color: "white" }}>
                  <div style={{ color: "white" }}>
                    {firstNumber +
                      " : " +
                      secondNumber +
                      " " +
                      amPm +
                      " : " +
                      journal.dream}{" "}
                    {symbolsArray.length > 0 &&
                      symbolsArray.map((symbol, index) => (
                        <div key={index}>
                          <a href={`/symbolsJournal/${symbol}/${journalMode}`}>
                            {symbol}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })
          : allMyJournals.map((journal) => {
              let firstNumber;
              let secondNumber;
              let amPm = "AM";
              secondNumber = journal.updatedAt.split("T")[1].split(":")[1];
              firstNumber = journal.updatedAt.split("T")[1].split(":")[0];
              if (parseInt(firstNumber) > 12) {
                amPm = "PM";
                firstNumber = parseInt(firstNumber) - 12;
              } else if (parseInt(firstNumber) === 12) {
                amPm = "PM";
              } else if (parseInt(firstNumber) === 0) {
                firstNumber = 12;
              }

              let symbolsArray = [];
              if (journal.symbols && journal.symbols.length > 0) {
                let symbols = journal.symbols;
                symbolsArray = symbols.split(",");
              }

              return (
                <div style={{ color: "white" }}>
                  <div style={{ color: "white" }}>
                    {firstNumber +
                      " : " +
                      secondNumber +
                      " " +
                      amPm +
                      " : " +
                      journal.writing}{" "}
                  </div>
                  {symbolsArray.length > 0 &&
                    symbolsArray.map((symbol, index) => (
                      <div key={index}>
                        <a href={`/symbolsJournal/${symbol}/${journalMode}`}>
                          {symbol}
                        </a>
                      </div>
                    ))}
                </div>
              );
            })}
      </div>
      <div className="SunContainer">
        <div
          className="sunFace"
          style={{
            backgroundImage: `url(${sunFace})`,
          }}
        ></div>
        <div className="RayConrainer1">
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
          <div
            className="Ray1"
            style={{
              backgroundImage: `url(${sunRay1})`,
            }}
          ></div>
        </div>
        <div className="RayContainer2">
          {allMyJournals.length > 0 &&
            allMyJournals[0].symbols.split(",").map((symbol, index) => (
              <div key={index}>
                <a href={`/symbolsJournal/${symbol}/${journalMode}`}>
                  <div
                    className="Ray2"
                    style={{ transform: `rotate(${index * 30}deg)` }}
                  ></div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
