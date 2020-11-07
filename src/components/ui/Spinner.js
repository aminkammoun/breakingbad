import React from "react";
import Spin from "../../img/spinner.gif";
function Spinner() {
  return (
    <div>
      <img
        src={Spin}
        alt="Loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default Spinner;
