import StartButtonMS from "./buttons/StartButtonMs.jsx";
import StopButtonMS from "./buttons/StopButtonMS.jsx";
import ResetButtonMS from "./buttons/ResetButton.jsx";

import { useState } from "react";

function ButtonsMS(props) {
  const [running, setRunning] = useState(false);

  const handleStart = (started) => {
    setRunning(started);
    props.iniciar();
  };

  const handleStop = (stopped) => {
    setRunning(stopped);
    props.parar();
  };

  const handleRestart = (restarted) => {
    setRunning(restarted);
    props.reiniciar();
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

export default ButtonsMS;
