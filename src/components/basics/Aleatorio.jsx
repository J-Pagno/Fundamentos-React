import React from "react";

export default (props) => {
  //Destructin -> const + {destructing} = de onde o valor será retirado objeto/array
  //Substitui o props.max e props.min
    const { min, max } = props;

  return parseInt(Math.random() * (max - min + 1)) + min;
};
