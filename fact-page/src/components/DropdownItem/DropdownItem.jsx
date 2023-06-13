import "./DropdownItem.css"
import { Link } from "react-router-dom"

const DropdownItem = (props) =>{
    return(
        <li className="dropdown-item">
            <img src={props.img} alt="" />
            <Link className="links" to = {props.link}><p>{props.text}</p></Link>
        </li>
    )
}

export default DropdownItem