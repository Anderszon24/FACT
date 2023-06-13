import image from '../../../public/Imgs/outline-account.png'
import "./Header.css"
import { Link } from 'react-router-dom'
import Buscador from '../Buscador/Buscador'
import DropDownMenu from '../DropdownMenu/DropdownMenu'

function Header(){
    return(
        <header>
            <div className='wave-bar-navegation-container'>
                <div className="division-nav-wave">
                    <div className="header-container">
                        <Link to="/" className="logo-ref-home">
                            <img src="/logo_fact.png" alt="Fact" />
                        </Link>
                    </div>
                    <nav className="menu-header">
                    <Buscador></Buscador>
                        <ul>
                            <li className="menu-item">
                                {/* <Link className='link-image' to="/LoginUsers"><img src={image} alt="icon-acount" /></Link> */}
                                <DropDownMenu></DropDownMenu>
                            </li>
                        </ul>
                    </nav>
                </div>
                <svg className='wave-svg' viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path className='wave-path' d="M-4.51,132.73 C147.29,178.13 376.41,88.33 500.00,151.48 L500.00,0.00 L0.00,0.00 Z">
                    </path>
                </svg>
            </div>
        </header>
    ) 
}

export default Header