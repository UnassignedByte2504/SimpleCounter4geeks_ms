import VectorsMS from "../VectorsMS.jsx";
import VarsMs from "../VarsMS.jsx";
import React from "react";
function SetTimerButtonMS() {
  return (
    <div className="">
      <button type="submit" className="StartButtonMS shadow-sm border-end-0">
        {VarsMs[1].BtnCountDown}
        {VectorsMS[0].Set}
      </button>
    </div>
  );
}

export default SetTimerButtonMS;
