import VectorsMS from "../VectorsMS.jsx";
import VarsMs from "../VarsMS.jsx";
import React from "react";
function ResetButtonMS(props) {
  const handleRestart = () => {
    props.onClick(false);
  };

  return (
    <button
      onClick={handleRestart}
      className="ResetButtonMS border-end-0 shadow-sm"
    >
      {VarsMs[1].BtnReset}
      {VectorsMS[0].Reset}
    </button>
  );
}

export default ResetButtonMS;
