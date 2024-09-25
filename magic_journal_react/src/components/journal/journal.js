//import jquery

import React, { useState, useContext, useEffect } from "react";
// import $ from "jquery";
import { MyContext } from "../../contexts/myContext";

  

  const Journal = () => {
      const contextValues = useContext(MyContext);
      const { userProfile, setUserProfile } = contextValues || {};


      const [allMyJournals, setAllMyJournals] = useState([]);
      const [newJournal, setNewJournal] = useState({
        title: "",
        entry: "",
        date: "",
      });
      const journalModes = [
        "dreams",
        "journal"
      ]
      const [journalMode, setJournalMode] = useState("journal");

  return (
    
    <div className="row table">
      journakMode: {journalMode}
     <div className = {
      "col-12 " + journalMode + " topRow" }>
        <div
        className="modeSelectJournal"
        >
          {journalModes.map((mode) => (
            <button
            onClick={() => setJournalMode(mode)}
            >
              {mode}
            </button>
          ))}

        </div>
      <form className="journalForm">
        <input
        
        >
        
        </input>
        </form>
      </div>

     
    </div>
  );
}

  


export default Journal;