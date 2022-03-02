import React from "react";
import "./Family";

export default (props) => {
  return (
    <div>
      <span>
        {props.nome} <strong>{props.sobrenome}</strong>
      </span>
    </div>
  );
};
