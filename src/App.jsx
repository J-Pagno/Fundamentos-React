import "./App.css";
import React from "react";

import Component from "./components/basics/Component";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentList from "./components/Repeticao/StudentList";
import Products from "./components/Repeticao/Products";
import ParOuImpar from "./components/Conditional/Conditional";
import UserInfo from "./components/Conditional/UserInfo";
import Input from "./components/Formulario/Input";
import Counter from "./components/Counter/Counter";
import MegaNumbers from "./components/Mega/MegaNumbers";

//Quando o export for DEFAULT, pode-se retornar uma funcção anonima (xxx xxx function(){}).
// Também é possível substituir a palavra "Function" por uma arrow function "=>". Na sintaxe da arrow f, é permitido retirar os parenteses do parâmetro.
//Caso não seja colocado parametros, pode-se colocar pareteses vazios, e caso haja um parametro que não seja usado, pode-se colocar underline _. Também é possível tirar as chaves, fazendo com que taambém seja retirado o "return"
export default (_) => (
  <div className="App">
    <h1>Fundamentos de React</h1>
    <div className="Cards">
      <Card titulo="Mega Sena" color="#982395">
        <MegaNumbers quantity={1} />
      </Card>

      <Card titulo="Contador" color="#982395">
        <Counter number={10} />
      </Card>

      <Card titulo="Renderização Condicional" color="#982395">
        <Input />
      </Card>

      <Card titulo="Componente Controlado" color="#982395">
        <ParOuImpar numero={20} />
        <UserInfo />
      </Card>

      <Card titulo="Repeticao - Tabela" color="#0aFd">
        <Products />
      </Card>

      <Card titulo="Repeticao - Lista" color="#0FF">
        <StudentList />
      </Card>

      <Card titulo="Componentes com ''Filhos''" color="green">
        <Family sobrenome="Pagno">
          <FamilyMember nome="Pedro" />
          <FamilyMember nome="Ana" />
          <FamilyMember nome="Jorgee" />
        </Family>
      </Card>

      <Card titulo="Aleatório" color="brown">
        <Aleatorio min={5} max={10} />
      </Card>

      <Card titulo="Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="Componente com Parâmetro">
        <ComParametro titulo="Título" subtitulo="Sub-Título" status="" />
      </Card>

      <Card titulo="Primeiro Componente">
        <Component />
      </Card>
    </div>
  </div>
);
