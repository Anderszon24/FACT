import "../assets/css/UsersReg.css";
import RegUsuarios from "../components/RegUsuarios/RegUsuarios";
import Header from "../components/Header/Header";

const UsersReg = () => {
  return (
    <div className="principal">
      <Header></Header>
      <section className="login-container">
        <RegUsuarios></RegUsuarios>
      </section>
    </div>
    )
};

export default UsersReg;
