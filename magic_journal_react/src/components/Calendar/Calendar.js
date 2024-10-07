import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./Calendar.css";
import { useState } from "react";
import API from "../../utils/API";
import { distribute } from "gsap";
import { MyContext } from "../../contexts/myContext";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var firstDay = new Date(year, month, 1);
var lastDay = new Date(year, month + 1, 0);
var firstDayIndex = firstDay.getDay();
var lastDayIndex = lastDay.getDate();
var nextMonth = month + 1;
var nextYear = year + 1;
var prevMonth = month - 1;
var prevYear = year - 1;

const Calendar = () => {
  //create a calendar component that shows a calendar with the current month and year that lists the days in a table
  //each day should be a clickable link that takes you to the spread page for that day

  const [calendarMode, setCalendarMode] = useState("journal");
  const [calendarDays, setCalendarDays] = useState([]);

  const { userProfile, setUserProfile } = useContext(MyContext);

  const [monthDisplay, setMonthDisplay] = useState(month);
  const [yearDisplay, setYearDisplay] = useState(year);
  const [fistDayIndexDisplay, setFirstDayIndexDisplay] =
    useState(firstDayIndex);
  //get a list of the days in the current month

  function setCalendarModeFunction(mode) {
    setCalendarMode(mode);

  }

  useEffect(() => {
    createCalendarDays();
  }, [calendarMode]);

  function nextMonthFunction() {
    if (nextMonth > 11) {
      month = 0;
      prevYear++;
      year++;
      prevMonth = 11;
      nextMonth = month+1;
      // nextMonth = 1;
      firstDay = new Date(year, month, 1);
      lastDay = new Date(year, month + 1, 0);
      firstDayIndex = firstDay.getDay();
      lastDayIndex = lastDay.getDate();
      setMonthDisplay(month);
      setYearDisplay(year);
      createCalendarDays();
      setFirstDayIndexDisplay(firstDayIndex);
    } else {
      console.log("next month else");
      console.log(month);

      month = month + 1;
      nextMonth++;
      firstDay = new Date(year, month, 1);
      lastDay = new Date(year, month + 1, 0);
      firstDayIndex = firstDay.getDay();
      lastDayIndex = lastDay.getDate();
      setFirstDayIndexDisplay(firstDayIndex);
      console.log("month hase changed" + month);
      setMonthDisplay(month);
      createCalendarDays();
    }
  }

  function prevMonthFunction() {
    console.log("prev month");
    if (prevMonth < 0) {
      month = 11;
      prevYear--;
      year--;
      prevMonth = 10;
      firstDay = new Date(year, month, 1);
      lastDay = new Date(year, month + 1, 0);
      firstDayIndex = firstDay.getDay();
      lastDayIndex = lastDay.getDate();
      setMonthDisplay(month);
      setYearDisplay(year);
      createCalendarDays();
      setFirstDayIndexDisplay(firstDayIndex);
    } else {
      console.log("prev month else");
      console.log(month);

      month = month - 1;
      prevMonth--;
      nextMonth--;
      firstDay = new Date(year, month, 1);
      lastDay = new Date(year, month + 1, 0);
      firstDayIndex = firstDay.getDay();
      lastDayIndex = lastDay.getDate();
      setFirstDayIndexDisplay(firstDayIndex);
      console.log("month hase changed" + month);
      setMonthDisplay(month);
      createCalendarDays();
    }
  }

  // useEffect(() => {
  //   console.log("use effect, month or year changed");

  //    createCalendarDays();
  // } ,[monthDisplay]);

  function distributeMonth(data) {
    var calendarDaysTemp = monthDays;
    console.log("distributing month");
    console.log(calendarDaysTemp);
    console.log("journals data");
    console.log(data);
    data.forEach((journal) => {
      let date = journal.date;
      for (let i = 0; i < calendarDaysTemp.length; i++) {
        // console.log(calendarDays[i].dateFormated);
        if (calendarDaysTemp[i].dateFormated === date) {
          console.log("found a match");
          console.log(calendarDaysTemp[i]);
          calendarDaysTemp[i].list.push(journal);
          console.log("calendar days temp");
          console.log(calendarDaysTemp);
          // setCalendarDays(calendarDaysTemp);
        }
      }
    });
    setCalendarDays(calendarDaysTemp);
  }

  function distributeMonth2() {
    var calendarDaysTemp = monthDays;
    console.log("distributing month2");
    console.log(calendarDaysTemp);
    setCalendarDays(calendarDaysTemp);
    // setCalendarDays(calendarDaysTemp);
  }
  //get this month's journals
  function getMonthJournals() {
    console.log("getting journals");
    console.log(month);
    console.log(year);
    API.getJournalsByMonth({
      month: month,
      year: year,
      id: userProfile.id,
    }).then((res) => {
      console.log("got month journals");
      console.log(res.data);
      distributeMonth(res.data);
    }).catch = (err) => {
      console.log(err);
      distributeMonth2();
    };
  }

  function getMonthDreams() {
    console.log("getting dreams");
    console.log(month);
    console.log(year);
    API.getDreamsByMonth({
      month: month,
      year: year,
      id: userProfile.id,
    }).then((res) => {
      console.log("got month dreams");
      console.log(res.data);
      distributeMonth(res.data);
    }).catch = (err) => {
      console.log(err);
      distributeMonth2();
    };
  }

    function getMonthSpreads() {
      console.log("getting spreads");
      console.log(month);
      console.log(year);
      API.getMonthSpreads({
        month: month,
        year: year,
        id: userProfile.id,
      }).then((res) => {
        console.log("got month spreads");
        console.log(res.data);
        distributeMonth(res.data);
      }).catch = (err) => {
        console.log(err);
        distributeMonth2();
      };
    }


  //get this month's dreams

  //get this month's spreads

  let monthDays = [];
  function createCalendarDays() {
    monthDays = [];
    console.log("creating calendar days");
    console.log("month " + month);
    console.log("year " + year);
    console.log("first day " + firstDay);
    console.log("last day " + lastDay);
    console.log("first day Index " + firstDayIndex);
    console.log("last day Index " + lastDayIndex);

    for (let i = firstDayIndex; i > 0; i--) {
      monthDays.push(" ");
    }
    for (let i = 1; i <= lastDayIndex; i++) {
      if (i < 10) {
        i = "0" + i;
      }
      let monthTemp;
      if (month + 1 < 10) {
        monthTemp = "0" + (month + 1);
      } else {
        monthTemp = month + 1;
      }
      monthDays.push({
        date: i,
        dateFormated: year + "-" + monthTemp + "-" + i,
        list: [],
      });
      if (i === lastDayIndex) {
        let lastDayofWeek = new Date(year, month, lastDayIndex).getDay();

        for (let j = 1; j < 7 - lastDayofWeek; j++) {
          monthDays.push(" ");
        }
      }
    }
    switch (calendarMode) {
      case "journal":
        getMonthJournals();
        break;
      case "dream":
        getMonthDreams();
        break;
      case "spread":
        getMonthSpreads();
        break;
    }
   
  }

  useEffect(() => {
    createCalendarDays();
    // setTimeout(() => {
    //   getMonthJournals();
    // }, 1000);
  }, []);

  // useEffect(() => {
  //   getMonthJournals();
  // },[monthDays]);

  return (
    <div className="Calendarcontainer">
      <h1>Calendar</h1>
      <div className="calendar">
        <div className="calendarHeader">
          <button onClick={() => setCalendarModeFunction("journal")}>
            Journal
          </button>
          <button onClick={() => setCalendarModeFunction("dream")}>
            Dream
          </button>
          <button onClick={() => setCalendarModeFunction("spread")}>
            Spread
          </button>

          <button onClick={prevMonthFunction}>Prev</button>
          <h1>
            {yearDisplay} {months[monthDisplay]}
          </h1>
          <button onClick={nextMonthFunction}>Next</button>
        </div>
        <div className="calendarDays">
          {days.map((day) => (
            <div key={day} className="calendarDay">
              {day}
            </div>
          ))}
        </div>
        <div className="calendarDates">
          {calendarDays.map((day, index) => (
            <div key={day.date} className="calendarDate">
              <div>{day.date}</div>
              {fistDayIndexDisplay}
              {index > fistDayIndexDisplay - 1 && day !== " " ? (
                <div>{day.dateFormated}</div>
              ) : (
                ""
              )}
              {index > firstDayIndex - 1 && day !== " " && day.list.length > 0
                ? day.list.map((journal) => (
                    <div key={journal.id}>{journal.id}</div>
                  ))
                : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
