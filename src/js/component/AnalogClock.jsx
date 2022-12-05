import React from "react";
import { useEffect, useState } from "react";

function AnalogClock() {
  //this is going to be an analog clock, so we need to get the time and move the hands around

  //we need to get the time
  const [time, setTime] = useState(new Date());
  const [hourHand, setHourHand] = useState(0);
  const [minuteHand, setMinuteHand] = useState(0);
  const [secondHand, setSecondHand] = useState(0);
  const [hourHandStyle, setHourHandStyle] = useState({});
  const [minuteHandStyle, setMinuteHandStyle] = useState({});
  const [secondHandStyle, setSecondHandStyle] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const hourDegrees = hour * 30 + minute / 2;
    const minuteDegrees = minute * 6;
    const secondDegrees = second * 6;
    setHourHandStyle({ transform: `rotate(${hourDegrees}deg)` });
    setMinuteHandStyle({ transform: `rotate(${minuteDegrees}deg)` });
    setSecondHandStyle({ transform: `rotate(${secondDegrees}deg)` });
  }, [time]);

  return (
    <div className="ClockContainer">
      <div className="clock">
        <div className="clockHands">
          <div className="hand hour-hand" style={hourHandStyle}>
           
          </div>
          <div className="hand minute-hand" style={minuteHandStyle}>
            
          </div>
          <div className="hand second-hand" style={secondHandStyle}>
            
          </div>
        </div>
        <div className="clock-face">
          <div className="I">I</div>
          <div className="II">II</div>
          <div className="III">III</div>
          <div className="IV">IV</div>
          <div className="V">V</div>
          <div className="VI">VI</div>
          <div className="VII">VII</div>
          <div className="VIII">VIII</div>
          <div className="IX">IX</div>
          <div className="X">X</div>
          <div className="XI">XI</div>
          <div className="XII">XII</div>
        </div>
      </div>
    </div>
  );
}

export default AnalogClock;
