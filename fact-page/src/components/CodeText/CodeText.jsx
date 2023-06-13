import { useState } from "react"
import "./CodeText.css"

const CodeText = (props) => {
    const placeHolderMod = `${props.placeHolder}...`

    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value)
    } 

    return <div className="campo-texto">
        <label htmlFor="">{props.title}</label>
        <input 
            placeholder={placeHolderMod} 
            required = {props.required}
            type={props.type}
            value = {props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CodeText