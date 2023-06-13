import image from "../../public/Imgs/Error_404.png"
import '../assets/css/Error404.css'

const Error404 = () =>{
    return(
        <main className="container-error-page">
            <img src={image} alt="Error404" />
            <p>Esta pagina no pudo ser encontrada</p>
        </main>
    )
}

export default Error404