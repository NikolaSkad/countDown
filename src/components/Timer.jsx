import React from 'react';

const Timer = ({changeVisibility, timerDays, timerHours, timerMinutes, timerSeconds}) => {
    return ( 
<section className="timer-container">
        <section className="timer">
          <div>
            <span onClick={changeVisibility} className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Countdown Timer</h2>
            <p>Countdown to a really special date. One you could or would never imagine!</p>
          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p><small>Days</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p><small>Hours</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p><small>Minutes</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p><small>Seconds</small></p>
            </section>
          </div>
        </section>
      </section>
    );
}
 
export default Timer;