import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
  const [hiddenSeconds, setHiddenSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [interval, intervalSet] = useState();
  const [binary, setBinary] = useState(0);
  const [decimal, setDecimal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);
  const [timer, setTimer] = useState();

  useEffect(() => {
    intervalSet(
      setInterval(() => {
        setHiddenSeconds(hiddenSeconds + 1);
        setSeconds(hiddenSeconds % 60);
        setMinutes(Math.floor(hiddenSeconds / 60));
        setBinary(hiddenSeconds.toString(2));
        setDecimal(hiddenSeconds.toString(10));
        setHexadecimal(hiddenSeconds.toString(16));
      }, 1000)
    );
    return () => clearInterval(interval);
  }, [hiddenSeconds]);

  useEffect(() => {
    if (hiddenSeconds === 0) {
      clearInterval(interval);
      setTimer(
        setInterval(() => {
          setHiddenSeconds(hiddenSeconds + 1);
          setSeconds(hiddenSeconds % 60);
          setMinutes(Math.floor(hiddenSeconds / 60));
          setBinary(hiddenSeconds.toString(2));
          setDecimal(hiddenSeconds.toString(10));
          setHexadecimal(hiddenSeconds.toString(16));
        }, 1000)
      );
    }
    return () => clearInterval(timer);
  }, [hiddenSeconds]);

  return (
    <div className="SimpleCounter">
      <div className="CounterContainer">
        <div className="Display"><span className="Label">Time: </span><h1 className="Digits">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1></div>
        <div className="Display"><span className="Label">Binary: </span><h1 className="Digits">{binary}</h1></div> 
        <div className="Display"><span className="Label">Decimal: </span><h1 className="Digits">{decimal}</h1></div>
        <div className="Display"><span className="Label">Hexadecimal: </span><h1 className="Digits">{hexadecimal}</h1></div>
      </div>
    </div>
  );
};

export default SimpleCounter;
