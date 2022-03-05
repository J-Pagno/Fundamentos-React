import React, { cloneElement } from "react";
import FamilyMember from "./FamilyMember";

export default (props) => {
  //operador spred(...props) => Todos os atributos são passados para o componente para o componente em específico
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return cloneElement(child, props)
      })}
    </div>
  );
};
