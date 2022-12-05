import VarsMs from "../VarsMS.jsx";
import VectorsMS from "../VectorsMS.jsx";
import React from "react";
function StopButtonMS(props) {
  const handleStop = () => {
    props.onClick(false);
  };

  return (
    <button
      onClick={handleStop}
      className="StopButtonMS shadow-sm border-end-0"
    >
      {VarsMs[1].BtnStop}
      {VectorsMS[0].Stop}
    </button>
  );
}

export default StopButtonMS;
