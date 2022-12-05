import React from "react";
import AnalogClock from "./AnalogClock.jsx";
import SimpleCounter from "./SimpleCounter.jsx";
import Timer from "./Timer.jsx";
import Countdown from "./Countdown.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container MainWrapper">
      <div className="SimpleCounter">
        <SimpleCounter />
      </div>
      <div className="Countdown">
        <Countdown />
      </div>
      <div className="AnalogClock">
        <AnalogClock />
      </div>
      <div className="Timer">
        <Timer />
      </div>
    </div>
  );
};

export default Home;
