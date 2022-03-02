import React from "react";
import FamilyMember from "./FamilyMember";

export default (props) => {
  return (
    <div>
      <FamilyMember nome="Pedro" sobrenome={props.sobrenome} />
      <FamilyMember nome="Ana" {...props} />
      <FamilyMember nome="Jorgee" sobrenome="Silvvvvvvvva" />
    </div>
  );
};
