import VectorsMS from "../VectorsMS.jsx";
import VarsMs from "../VarsMS.jsx";
import React from "react";
function StartButtonMS(props) {
  const handleStart = () => {
    props.onClick(true);
  };

  return (
    <button
      onClick={handleStart}
      className="StartButtonMS shadow-sm border-end-0"
    >
      {VarsMs[1].BtnPlay}
      {VectorsMS[0].Play}
    </button>
  );
}

export default StartButtonMS;
