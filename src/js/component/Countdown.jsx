import { useState } from "react";
import React from "react";
import ButtonsCdMS from "./ButtonsCdMS.jsx";
import SetTimerButtonMS from "./buttons/SetTimerButtonMs.jsx";

function Countdown() {
  const [running, setRunning] = useState(false);
  const [countDown, setCountDown] = useState({
    CountDownMinutes: 0,
    CountDownSeconds: "",
  });

  const [CdInterval, CdIntervalSet] = useState();

  // get the values from the input fields
  const [inputValues, setInputValues] = useState({
    inputMinutes: "",
    inputSeconds: "",
  });

  // get the values from the input fields

  // handle the inputValues
  const handleCdChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCdSubmit = (e) => {
    if (inputValues.inputMinutes === "" && inputValues.inputSeconds === "") {
      return;
    }
    e.preventDefault();
    setCountDown({
      CountDownMinutes: inputValues.inputMinutes,
      CountDownSeconds: inputValues.inputSeconds,
    });
  };
  // handle the inputValues

  let CDMinutes = inputValues.inputMinutes;
  let CDSeconds = inputValues.inputSeconds;

  // get the values from the input fields

  // >>>>loop that decrements the values of the timer and stops at 0
  const runDecrease = () => {
    for (let i = 0; i < 1; i++) {
      CDSeconds--;
      if (CDSeconds === -1) {
        CDMinutes--;
        CDSeconds = 59;
      }
      if (CDMinutes === -1) {
        CDMinutes = 0;
        CDSeconds = 0;
      }
      return setCountDown({
        CountDownMinutes: CDMinutes,
        CountDownSeconds: CDSeconds,
      });
    }
  };

  const startCd = () => {
    setRunning(true);
    if (CDMinutes === 0 && CDSeconds === 0) {
      return;
    }
    CdIntervalSet(
      setInterval(() => {
        runDecrease();
      }, 1000)
    );
  };

  const pauseCd = () => {
    clearInterval(CdInterval);
  };

  const resetCd = () => {
    clearInterval(CdInterval);
    setCountDown({
      CountDownMinutes: 0,
      CountDownSeconds: "",
    });
  };

  return (
    <div className="CountDownMS">
      <div className="CountDownFormMS">
        <form onSubmit={handleCdSubmit}>
          <div className="CountDownInputHolderMS">
            <input
              type="text"
              placeholder="Minutes"
              value={inputValues.inputMinutes}
              name="inputMinutes"
              onChange={handleCdChange}
              className="shadow-sm border-end-0"
            />
            <input
              type="text"
              placeholder="Seconds"
              value={inputValues.inputSeconds}
              name="inputSeconds"
              onChange={handleCdChange}
              className="shadow-sm border-end-0"
            />
          </div>
          <div className="CountDownSetButtonMS">
            <SetTimerButtonMS />
          </div>
        </form>
      </div>
      <div className="CountDownDisplayMS">
        <div className="CountDownDigitsMS">
          <span className="CountDownDigitsMS">
            {countDown.CountDownMinutes?.toString().padStart(2, "0")}
          </span>
          <span className="CountDownDigitsMS">:</span>
          <span className="CountDownDigitsMS">
            {countDown.CountDownSeconds?.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <ButtonsCdMS
        startCd={startCd}
        pauseCd={pauseCd}
        resetCd={resetCd}
        seconds={countDown.CountDownSeconds}
        running={running}
      />
    </div>
  );
}

export default Countdown;
