import { useEffect, useState } from "react" 
import "./Log.css"
import CodeText from "../CodeText/CodeText"
import Button from "../Button/Button"
import { Link , useNavigate} from "react-router-dom"
import axios from 'axios'

const Log = () =>{

    const [name, actualizarName] = useState("")
    const [password, actualizarPass] = useState("")
    const [loginStatus, actualizarLoginStatus] = useState("")
    const [statusHolder, actualizarStatusHolder] = useState("message")

    const navigateTo = useNavigate()

    const loginUser = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3002/LoginUsers',{ 
            LoginPassword: password, 
            LoginUserName: name 
        }).then((response)=> {
            // const Obj = Object.values(response.data[0])

            if(response.data.message){
                navigateTo('/LoginUsers')
                actualizarLoginStatus("Las credenciales no coinciden")
                actualizarName("")
                actualizarPass("")
            }else{
                const Obj = Object.values(response.data[0])
                if(Obj[11] == 3){
                    navigateTo('/HomeRoot')
                }
                if(Obj[11] == 2){
                    navigateTo('/HomeAdmin')
                }
            }
        })
    } 

    useEffect(() =>{
        if(loginStatus !== ''){
            actualizarStatusHolder('login-state-container')
            setTimeout(() => {
                actualizarStatusHolder('message')
            }, 100000);
        }
    },[loginStatus]
    )

    return <section className="login-service">
        <h1>Bienvenido!</h1>
        <form onSubmit={loginUser}>
            <div className={statusHolder}>
                <span className="login-state">
                    {loginStatus}
                </span>
            </div>
            <CodeText 
                title = "Nombre de usuario"
                required
                placeHolder="Usuario"
                valor={name} 
                actualizarValor={actualizarName}
            ></CodeText>
            <CodeText
                type="password"
                title = "Contraseña"
                required
                placeHolder="Contraseña"
                valor={password} 
                actualizarValor={actualizarPass}
            ></CodeText>
            <div className="button-division">
                <div className="help-container">
                    <Link to="/"><p> olvidaste tu contraseña o usuario?</p></Link>
                    <Link to="/UsersReg"><p> Aun no te has registrado? hazlo ahora!</p></Link>
                </div>
                <Button>Iniciar sesion</Button>
            </div>
        </form>
    </section>
}

export default Log