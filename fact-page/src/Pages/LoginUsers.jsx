import '../assets/css/LoginUsers.css'
import Log from '../components/Log'
import Header from "../components/Header/Header"

const LoginUsers = () =>{
    return (
        <div className="principal">
            <Header></Header>
            <section className='login-container'>
                <Log></Log>
            </section>
        </div>
    )
}

export default LoginUsers