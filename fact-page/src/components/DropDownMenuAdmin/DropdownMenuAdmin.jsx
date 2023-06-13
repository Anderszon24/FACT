import "./DropDownMenuAdmin.css"
import DropdownItem from "../DropdownItem/DropdownItem"
import React, {useState, useEffect, useRef} from 'react';

const DropDownMenuAdmin = () =>{

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                console.log(menuRef.current);
            }      
        };

        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

    return(
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <img src="..\..\..\public\Imgs\outline-account.png"></img>
            </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <ul>
                    <DropdownItem 
                        img="..\..\..\public\Imgs\books.png" 
                        text="Administrar libros"
                        link="/ShowInformation"
                    ></DropdownItem>
                    <DropdownItem 
                        img="..\..\..\public\Imgs\settings.png" 
                        text="Configurar cuenta"
                        link="/HomeAdmin"
                    ></DropdownItem>
                    <DropdownItem 
                        img="..\..\..\public\Imgs\logout.png" 
                        text="Cerrar sesión"
                        link="/"
                    ></DropdownItem>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenuAdmin
