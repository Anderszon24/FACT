import '../assets/css/LoginUsers.css'
import RegAdmins from '../components/RegAdmins/RegAdmins'
import HeaderRoot from "../components/HeaderRoot/HeaderRoot"

const UsersAdminReg = () =>{
    return (
        <div className="principal">
            <HeaderRoot></HeaderRoot>
            <RegAdmins></RegAdmins>
        </div>
    )
}

export default UsersAdminReg