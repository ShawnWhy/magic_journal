import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
import { useState } from 'react';
import API from '../../utils/API';
import { distribute } from 'gsap';
import { MyContext } from '../../contexts/myContext';



const Calendar = () =>{
//create a calendar component that shows a calendar with the current month and year that lists the days in a table
//each day should be a clickable link that takes you to the spread page for that day


const [calendarDays, setCalendarDays] = useState([]);

  const { userProfile, setUserProfile} = useContext(MyContext);


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var firstDay = new Date(year, month, 1);
var lastDay = new Date(year, month + 1, 0);
var firstDayIndex = firstDay.getDay();
var lastDayIndex = lastDay.getDate();
var nextMonth = month + 1;
var nextYear = year;

var prevMonth = month - 1;
var prevYear = year;
//get a list of the days in the current month

function nextMonthFunction() {
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear = nextYear + 1;
  }
  month = nextMonth;
  year = nextYear;
  createCalendarDays();
}

function prevMonthFunction() {
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear = prevYear - 1;
  }
  month = prevMonth;
  year = prevYear;
  createCalendarDays();
}

function distributeMonth(data) {
  var calendarDaysTemp = monthDays;
  console.log("distributing month");
  console.log(data);
  data.forEach(journal=>{
    let date = journal.date;
    for (let i = 0; i < calendarDaysTemp.length; i++) {
      // console.log(calendarDays[i].dateFormated);
      if (calendarDaysTemp[i].dateFormated === date) {
        console.log("found a match");
        console.log(calendarDays[i]);
        calendarDaysTemp[i].list.push(journal);
        setCalendarDays(calendarDaysTemp);
        // setCalendarDays(calendarDaysTemp);
      }
    }

  })


}
//get this month's journals
function getMonthJournals() {
  console.log("getting journals");
  API.getJournalsByMonth({
    month: month,
    year: year,
    id: userProfile.id
  }


  ).then((res) => {
    console.log(res.data);
    distributeMonth(res.data);
  }).catch = (err) => {
    console.log(err);
  };   
} 


//get this month's dreams

//get this month's spreads

let monthDays = [];
function createCalendarDays() {


for (let i = firstDayIndex; i > 0; i--) {
  monthDays.push(" ");
}
for (let i = 1; i <= lastDayIndex; i++) {
  if(i<10){
    i = "0" + i;
  }
  monthDays.push({
    date:i,
    dateFormated: year + "-" + (month+1) + "-" + i,
  list:[]});
}

}

useEffect(() => {
createCalendarDays();
// setTimeout(() => {
//   getMonthJournals();
// }, 1000);

},[]);

useEffect(() => {
  getMonthJournals();
},[monthDays]);


  return (
    <div className="Calendarcontainer">
      <h1>Calendar</h1>
      <div className="calendar">
        <div className="calendarHeader">
          <button>Prev</button>
          <h1>
            {months[month]} {year}
          </h1>
          <button>Next</button>
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
            <div key={day} className="calendarDate">
              <div>{day.date}</div>
              
              {index > firstDayIndex - 1 && day !== " " ?
              
              <div>{day.dateFormated}</div>
            
              : ""}
              {index>firstDayIndex-1 && day !== " "&& day.list.length>0? day.list.map((journal)=>(
                <div key={journal.id}>{journal.id}</div>
              )):""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Calendar;
