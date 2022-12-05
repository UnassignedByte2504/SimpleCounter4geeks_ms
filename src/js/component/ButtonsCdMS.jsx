import StartButtonMS from "./buttons/StartButtonMs.jsx";
import StopButtonMS from "./buttons/StopButtonMS.jsx";
import ResetButtonMS from "./buttons/ResetButton.jsx";
import React from "react";
import { useState } from "react";

function ButtonscDMS(props) {
  const [running, setRunning] = useState(props.running);

  const handleStart = (started) => {
    setRunning(started);
    props.startCd();
  };

  const handleStop = (stopped) => {
    setRunning(stopped);
    props.pauseCd();
  };

  const handleRestart = (restarted) => {
    setRunning(restarted);
    props.resetCd();
  };

  if (running) {
    return (
      <div className="ButtonsContainerMS">
        <StopButtonMS onClick={handleStop} />
        <ResetButtonMS onClick={handleRestart} />
      </div>
    );
  }

  return (
    <div className="ButtonsContainerMS">
      <StartButtonMS onClick={handleStart} />
    </div>
  );
}

export default ButtonscDMS;
