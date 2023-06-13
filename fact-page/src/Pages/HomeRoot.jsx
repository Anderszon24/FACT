import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/HomeRoot.css'
import HeaderRoot from "../components/HeaderRoot/HeaderRoot"


const HomeRoot = () =>{
    return(
        <div className="principal">
            <HeaderRoot></HeaderRoot>
            <main className="container-home-page">
                <img src={image} alt="working-in-that" />
                <p>
                    Estamos trabajando para crear una mejor pagina, nos vemos 
                    pronto!!
                </p>
            </main>
        </div>
    )
}

export default HomeRoot