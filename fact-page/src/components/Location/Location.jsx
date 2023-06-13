import "./Location.css"

const Location = (props) => {
    
        const tablas = props.listOptions
    
        const manejarCambios = (event) => {
            console.log("cambio", event.target.value)
            props.actualizarValor(event.target.value)
    
        }
    
        return <div className="lista-opciones">
            <select value={props.valor} onChange={manejarCambios}>
                <option value="" disabled defaultValue="" hidden>{props.placeHolder}</option>
                {tablas.map((tabla, index) => <option key={index} value={tabla}>{tabla}</option>)}
            </select>
        </div>
    }

export default Location