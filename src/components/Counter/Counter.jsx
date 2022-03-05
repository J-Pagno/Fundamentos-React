import React, { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import SumInterval from "./SumInterval";

export default (props) => {
  const initialNumber = props.number;
  const initialSumValue = 1;
  const [counterVal, setCounter] = useState(initialNumber);
  const [sumValue, setSumValue] = useState(initialSumValue);

  function updateSumValue(e) {
    setSumValue(e.target.value);
  }

  function addCounterVal(val) {
    setCounter(parseInt(val) + parseInt(sumValue));
  }

  function removeFromCounterVal(val) {
    setCounter(parseInt(val) - parseInt(sumValue));
  }

  function aalert(teste) {
    alert(teste);
  }

  return (
    <div>
      <h2>Contador</h2>
      <Display counterVal={counterVal} />
      <SumInterval sum={sumValue} updateSumValue={updateSumValue} />
      <Buttons
        setInc={(_) => addCounterVal(counterVal)}
        setDec={(_) => removeFromCounterVal(counterVal)}
      />
    </div>
  );
};
