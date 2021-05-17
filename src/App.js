import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="timer-container">
        <section className="timer">
          <div>
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Countdown Timer</h2>
            <p>Countdown to a really special date. One you could or would never imagine!</p>
          </div>
          <div>
            <section>
              <p>85</p>
              <p><small>Days</small></p>
            </section>
            <span>:</span>
            <section>
              <p>25</p>
              <p><small>Hours</small></p>
            </section>
            <span>:</span>
            <section>
              <p>55</p>
              <p><small>Minutes</small></p>
            </section>
            <span>:</span>
            <section>
              <p>15</p>
              <p><small>Seconds</small></p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
