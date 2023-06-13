import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/HomeRoot.css'
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin"


const HomeAdmin = () =>{
    return(
        <div className="principal">
            <HeaderAdmin></HeaderAdmin>
            <main className="container-home-page">
                <img src={image} alt="working-in-that" />
                <p>
                    Bienvenido admin
                </p>
            </main>
        </div>
    )
}

export default HomeAdmin