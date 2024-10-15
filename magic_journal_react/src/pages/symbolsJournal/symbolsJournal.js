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
        if(journal.symbols.split(',').includes(symbol)){
          newList.push(journal);
        }
      });
      console.log(newList);
      setJournalList(newList);
    }

    const getSpreadsThatContainSymbol = (list)=>{
      let newList = [];
      list.forEach((spread)=>{
      if(spread.Cards.split(',').includes(symbol)){
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
        if(reading.Symbols.split(",").includes(symbol)){
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
      
        return <div>
          <p>{journal.id}</p>
          
        </div>
      
      
    })
  }
    
   </div>
  );
};

export default SymbolsJournal;
