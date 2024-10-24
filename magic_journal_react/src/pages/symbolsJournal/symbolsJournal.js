import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import API from "../../utils/API";
import { MyContext } from "../../contexts/myContext";
import { useParams } from "react-router-dom";
import styles from "./symbolsJournal.module.css";
// import { use } from "express/lib/router";
//get two parameters from the url
const SymbolsJournal = (props) => {
  let { symbol, mode } = useParams();
  console.log("params:", symbol, mode);



  const [journallist, setJournalList] = useState([]);
  const { userProfile, setUserProfile } = useContext(MyContext);

  const getListsBasedOnMode = (list) => {
    switch (mode) {
      case "journal":
        getAllOfMyJournals();
        return 
      case "dreams":
        getAllOfMyDreams();
        return
      case "spreads":
        getAllOfMySpreads();
        return 
      case "readings":
        getAllOfMyReadings();
        return
      default:
        getAllOfMyJournals();
        return list;
    }
  };

  const getAllOfMySpreads = ()=>{
    console.log("getting spreads")
    console.log(userProfile.id)
    API.getSpreadsByUser(userProfile.id).then((res)=>{
      console.log("spreads",res.data)
      
      getSpreadsThatContainSymbol(res.data)
      
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getAllOfMyDreams =()=>{
    API.getDreamsByUser(userProfile.id)
      .then((res) => {
        console.log(res.data);
        getJournalsThatContainSymbol(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    const getAllOfMyJournals = () => {
      console.log("getting journal list", symbol);
      API.getJournalsByUser(userProfile.id)
        .then((res) => {
          console.log(res.data);
          getJournalsThatContainSymbol(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }; 

    const getAllOfMyReadings = ()=>{
      API.getReadingsByUser(userProfile.id)
        .then((res) => {
          console.log(res.data);
          getReadingsThatContainSymbol(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    const getJournalsThatContainSymbol = (list) => {
      let newList = [];
      list.forEach((journal) => {
        let symbols = journal.symbols.toLowerCase()
        if(symbols.split(',').includes(symbol.toLowerCase())){
          newList.push(journal);
        }
      });
      console.log(newList);
      setJournalList(newList);
    }

    const getSpreadsThatContainSymbol = (list)=>{
      let newList = [];
      list.forEach((spread)=>{
       let cards= spread.Cards.toLowerCase() 
       console.log("cards")
       console.log(cards)
      if(cards.split(',').includes(symbol.toLowerCase())){
        newList.push(spread)
        console.log(symbol)
        
      }
      })
      setJournalList(newList);
            console.log(newList);

    }

    const getReadingsThatContainSymbol =(list)=>{
      let newList = [];
      list.forEach((reading)=>{
        let symbols= reading.Symbols.toLowerCase()
        if(reading.Symbols.split(",").includes(symbol.toLowerCase())){
          newList.push(reading)
        }
      })
      console.log("newList fir readngs")
      console.log(newList)
      setJournalList(newList);
    }

    useEffect(() => {
      getListsBasedOnMode();
    }
    , []);





  return (
   <div>
    {journallist.map((journal) => {
      var symbols = []
      if(journal.symbols && journal.symbols.lenth>0 && ! mode==="readings" ){
        symbols = journal.symbols.split(",")
      }
      else if(journal.Symbols && journal.Symbols.length>0 && mode==="readings"){
        symbols = journal.Symbols.split(",");

      }
      //switch mode
      switch (mode) {
        case "journal":
          return <div>
            <p>{journal.writing}</p>
            {symbols.length>0 && <p>{symbols.map((symbol)=>{
              return (
                <a href={`/symbolsJournal/${symbol}/journals`}>
                  {" "}
                  <p>{symbol}</p>
                </a>
              );

            })}</p>
          }
            
          </div>
        case "dreams":
          return (
            <div>
              <p>{journal.dream}</p>
              {symbols.length > 0 && (
                <p>
                  {symbols.map((symbol) => {
                    return (
                      <a href={`/symbolsJournal/${symbol}/dreams`}>
                        {" "}
                        <p>{symbol}</p>
                      </a>
                    );
                  })}
                </p>
              )}
            </div>
          );
        case "spreads":
          return <div>
            <a href={`/spreadPage/${journal.id}`}><p>{journal.id}</p></a>
          </div>
        case "readings":  
          return <div>
            <p>{journal.ReadingText}</p>
            
          </div>
        default:
          return <div>
            <p>{journal.id}</p>
            <p>{journal.entry}</p>
          </div>
      } 

      
    })
  }
    
   </div>
  );
};

export default SymbolsJournal;
