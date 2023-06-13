import "./Form.css"
import CodeText from "../CodeText/CodeText"
import OptionList from "../OptionsList/OptionList"
import Button from "../Button/Button"
import { useState } from "react"

const Formulario = () => {

    const [nombre, actualizarNombre] = useState()
    const [puesto, actualizarPuesto] = useState()
    const [foto, actualizarFoto] = useState()

    const sendInfo = (event) => {
        event.preventDefault()
        console.log("Manejar envio")
        let datosAEnviar = {
            nombre: nombre, 
            puesto: puesto, 
            foto: foto
        }
        console.log(datosAEnviar)
    }

    return <section className="form">
        <form onSubmit={sendInfo}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CodeText 
                title="Nombre" 
                placeHolder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}>
            </CodeText>
            <CodeText 
                title="Puesto" 
                placeHolder="Ingresar su puesto" 
                required
                valor = {puesto}
                actualizarValor={actualizarPuesto}>
            </CodeText>
            <CodeText 
                title="Foto" 
                placeHolder="Ingresar foto" 
                required
                valor = {foto}
                actualizarValor={actualizarFoto}>
            </CodeText>
            <OptionList></OptionList>
            <Button>
                Crear colaborador
            </Button>
        </form>
    </section>
}

export default Formulario

