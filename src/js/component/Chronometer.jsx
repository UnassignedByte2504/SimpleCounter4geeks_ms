import React from 'react'
import {useState, useEffect, useMemo} from 'react'

function Chronometer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const toggle = () => {
    setIsRunning(!isRunning);
  }

  const reset = () => {
    setTime(0);
    setLaps([]);
  }

  const lap = () => {
    setLaps([...laps, time]);
  }

  const clear = () => {
    setLaps([]);
  }


  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const milliseconds = ('0' + (Math.floor(time / 10) % 100)).slice(-2);
  const seconds = ('0' + (Math.floor(time / 1000) % 60)).slice(-2);
  const minutes = ('0' + (Math.floor(time / 60000) % 60)).slice(-2);
  const hours = ('0' + Math.floor(time / 3600000)).slice(-2);

  return (
    <div className="Chronometer">
      <div className="ChronometerDisplay">
       <h3>{hours} : {minutes} : {seconds} : {milliseconds}</h3> 
      </div>
      <div className="ChronometerControls">
        <button className='TimerButton Chrono' onClick={toggle}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className='TimerButton Chrono'onClick={reset}>Reset</button>
        <button className='TimerButton Chrono'onClick={lap}>Lap</button>
        <button className='TimerButton Chrono'onClick={clear}>Clear</button>
      </div>
      <div className='LapsTitle'><h3>Laps</h3></div>
      <div className="ChronometerLaps">
        {laps.map((lap, index) => (
          <div key={index} className="ChronometerLap">
            <h3 key={index}>{('0' + (Math.floor(lap / 3600000))).slice(-2)} : 
            {('0' + (Math.floor(lap / 60000) % 60)).slice(-2)} :
             {('0' + (Math.floor(lap / 1000) % 60)).slice(-2)} :
              {('0' + (Math.floor(lap / 10) % 100)).slice(-2)}</h3>
          <hr key={index}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chronometer;