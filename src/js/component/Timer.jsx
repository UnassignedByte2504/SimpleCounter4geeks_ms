import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState({
    seconds:"",
    minutes:""
  })

  const [timerInput, setTimerInput] = useState({
    inputSeconds:0,
    inputMinutes:0
  })
  const handleChange = (e) => {
    if (isNaN(e.target.value)){
      return;
    }
    setInputTimer({
      ...timerInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    setTimer(
      {
        seconds: timerInput.seconds,
        minutes: timerInput.minutes
      }
    )
  }
  return (
  <div className="TimerContainer">
    <div className="TimerDisplay">
      <h1 className="Digits">{timer.minutes}00</h1>
    </div>
    <div className="TimerInputs">
      <form onSubmit={() =>handleSubmit()}>
      <input name="inputMinutes" placeholder="Minutes" onChange={(minutes) => handleChange(setTimer(minutes))}/>
      <input placeholder="Seconds" />
      </form>
    </div>
  </div>
  )
}

export default Timer;
