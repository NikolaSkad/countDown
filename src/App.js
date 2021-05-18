import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Timer from './components/Timer';


function App() {
  
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  
  let interval = useRef();

  const startTimer = () => {
    if(interval){
      clearTimeout(interval);
    }
    changeTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearTimeout(interval);
    };
  });

  const changeTimer = () => {
    const countDownDate = new Date(date).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / ( 1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((distance % ( 1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % ( 1000 * 60)) / 1000);
  
    if(distance < 0){
      //stop out timer
      clearTimeout(interval)
    }else{
      //upload timer
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
    interval = setTimeout(changeTimer, 1000);
  }

  const changeDate = e => {
    setDate(e);
    changeVisibility();
  }

  const changeVisibility = () => {
    setShowCalendar(!showCalendar);
  };


  return (
    <div className="App">
      <div className="instruction">
          <p>( Click on calendar icon to set Time )</p>
      </div>
      {
        showCalendar && (
          <div id="call" className="calendar-container">
            <Calendar 
              className="calendar"
              value={date}
              onChange={changeDate}
            />
          </div>
        )
      }
      <Timer 
        changeVisibility={changeVisibility}
        timerDays={timerDays} 
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
