import './App.css'
import Header from './components/Header/Header'
import HomeRoot from './Pages/HomeRoot'
import HomeAdmin from './Pages/HomeAdmin'
import Log from './components/Log/index'
import Error404 from './Pages/Page404'
import Home from './Pages/Home'
import LoginUsers from './Pages/LoginUsers'
import UsersAdminReg from './Pages/UsersAdminReg'
import KillAdmin from './Pages/KillAdmin'
import UsersReg from './Pages/UsersReg'
import BookAdd from './Pages/BookAdd'
import ShowInformation from './Pages/ShowInformation'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  // const [mostrarFormulario, actualizarMostrar] = useState(false)

  // const cambiarMostrar = () => {
  //   actualizarMostrar(!mostrarFormulario)
  // }


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/HomeRoot' element={<HomeRoot/>}/>
        <Route path='/HomeAdmin' element={<HomeAdmin/>}/>
        <Route path='/LoginUsers' element={<LoginUsers/>}/>
        <Route path='/usersAdminReg' element={<UsersAdminReg/>}/>
        <Route path='/ShowInformation' element={<ShowInformation/>}/>
        <Route path='/KillAdmin' element={<KillAdmin/>}/>
        <Route path='/BookAdd' element={<BookAdd/>}/>
        <Route path='/UsersReg' element={<UsersReg/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
    // <section className='container-log-users'>
    //   <Log></Log>
    // </section>
    // <>
    // <Header></Header>
    // { mostrarFormulario === true? <Formulario></Formulario> : <div></div>}
    // <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
    // </>
  )
}

export default App
