import { useState } from "react";
import "../assets/css/KillAdmin.css"
import CodeText from "../components/CodeText/CodeText"
import Button from "../components/Button/Button"
import axios from 'axios'
import HeaderRoot from "../components/HeaderRoot/HeaderRoot"


const KillAdmin = () =>{

    const [Id, actualizarId] = useState("")

    const deleteUser = () =>{
        axios.post('http://localhost:3002/KillAdmin',{
            ID: Id,
            IdCargo: '2'
        }).then(()=> {
            console.log('User has been delete')
        })
    } 

    return (
        <div className="principal">
            <HeaderRoot></HeaderRoot>
            <section className="kill-admin-container">
                <h2>Eliminar administrador</h2>
                <p>
                    Este usuario sera eliminado de la base de datos FANC, por favor
                    ingrese los siguientes campos y confirme de que los datos sean
                    correctos.
                </p>
                <form onSubmit={deleteUser}>
                    <CodeText 
                        title = "Id del usuario a eliminar"
                        required
                        placeHolder="ID"
                        valor={Id} 
                        actualizarValor={actualizarId}
                    ></CodeText>
                    <div className="button-division">
                        <Button>Eliminar</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default KillAdmin
        