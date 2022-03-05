import React from "react";
import "./sumInterval.css"

export default (props) => {
  return (
    <div className="inputSumVal">
      <label htmlFor="sumVal">Intervalo de Soma: </label>
      <input id="sumVal" type="number" value={props.sum} onChange={props.updateSumValue} />
    </div>
  );
};
