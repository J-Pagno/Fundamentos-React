import React, { useState } from "react";

import "./input.css";

export default (props) => {
  const [value, setValue] = useState("Valor Inicial");

  function onChangeState(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input">
      <div style={{
          display:'flex',
          flexDirection: 'column'
      }}>
        <input
          value={value}
          onChange={onChangeState}
          maxLength="5"
          placeholder="Text"
        />
        <input value={value} maxLength="5" placeholder="Text" readOnly />
        <input maxLength='5'/>
      </div>
    </div>
  );
};
