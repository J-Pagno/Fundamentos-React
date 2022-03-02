import "./App.css";
import React from "react";

import Component from "./components/basics/Component";
import ComParametro from "./components/basics/ComParamentro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basics/Family'

//Quando o export for DEFAULT, pode-se retornar uma funcção anonima (xxx xxx function(){}).
// Também é possível substituir a palavra "Function" por uma arrow function "=>". Na sintaxe da arrow f, é permitido retirar os parenteses do parâmetro.
//Caso não seja colocado parametros, pode-se colocar pareteses vazios, e caso haja um parametro que não seja usado, pode-se colocar underline _. Também é possível tirar as chaves, fazendo com que taambém seja retirado o "return"
export default (_) => (
  <div className="App">
    <h1>Fundamentos de React</h1>
    <div className="Cards">

      <Card titulo="Título" color="green">
        <Familia sobrenome="Ferreira"/>
      </Card>

      <Card titulo="Título" color="green">
        <Aleatorio min={5} max={10} />
      </Card>

      <Card titulo="Título">
        <Aleatorio min={5} max={10} />
      </Card>

      <Card titulo="Título">
        <Aleatorio min={5} max={10} />
      </Card>

      <Card titulo="Título">
        <Aleatorio min={5} max={10} />
      </Card>

    </div>
  </div>
);
