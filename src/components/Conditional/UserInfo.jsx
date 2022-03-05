import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const user = props.userData || {nome: "Bro"};

  return (
    <div>
      {/* <If test={user && user.nome}>
        Olá {user.nome}, seja bem vindo!
      </If>
      <If test={!user || !user.nome}>
        Olá Bro, seja bem vindo!
      </If> */}

      <If test={user && user.nome}>
        Olá {user.nome}, seja bem vindo!
      </If>
    </div>
  );
};
