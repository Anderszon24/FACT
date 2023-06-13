import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/Home.css'
import Header from "../components/Header/Header"

const Home = () =>{
    return(
        <div className="principal">
            <Header></Header>
            <main className="container-home-page">
                <div className="home-page-principal">
                    <img src={image} alt="working-in-that" />
                    <p>
                        Estamos trabajando para crear una mejor pagina, nos vemos 
                        pronto!!
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Home