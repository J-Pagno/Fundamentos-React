import React from "react";

//O parametro props reccebe um objeto em seu retorno
export default function ComParametro(props) {
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h1>{ props.titulo }</h1>
            <h2>{ props.subtitulo } tem nota { props.nota }</h2>
            <p> e foi { status }</p>
        </div>
    )
}