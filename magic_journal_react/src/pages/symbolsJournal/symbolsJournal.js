import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import API from "../../utils/API";
import { MyContext } from "../../contexts/myContext";
import { useParams } from "react-router-dom";
import styles from "./symbolsJournal.module.css";
import { use } from "express/lib/router";
//get two parameters from the url
const SymbolsJournal = (props) => {
  let { symbol, mode } = useParams();
  console.log("params:", symbol, mode);



  const [journallist, setJournalList] = useState([]);
  const { userProfile, setUserProfile } = useContext(MyContext);

  const getListsBasedOnMode = (list) => {
    switch (mode) {
      case "journal":
        return list.filter((journal) => journal.writing);
      case "dreams":
        return list.filter((journal) => journal.symbols);
      case "spreads":
      default:
        return list;
    }
  };
    const getAllofMyJournals = () => {
      API.getJournalsByUser({
        
        userId: userProfile.id,
      }).then((res) => {
        console.log(res.data);
        getJournalsThatContainSymbol(res.data);
        
      });
    }; 
    
    const getJournalsThatContainSymbol = (list) => {
      let newList = [];
      list.forEach((journal) => {
        if(journal.symbols.includes(symbol)){
          newList.push(journal);
        }
      });
      setJournalList(newList);
    }

    useEffect(() => {
      getAllofMyJournals();
    }
    , []);





  return (
   <div>
    
   </div>
  );
};

export default SymbolsJournal;
