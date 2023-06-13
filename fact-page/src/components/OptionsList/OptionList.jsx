import "./OptionList.css"

const OptionsList = (props) => {

    const equipos = props.listOptions

    const manejarCambios = (event) => {
        console.log("cambio", event.target.value)
        props.actualizarValor(event.target.value)

    }

    return <div className="lista-opciones">
        <label htmlFor="">{props.name}</label>
        <select value={props.valor} onChange={manejarCambios}>
            <option value="" disabled defaultValue="" hidden>{props.placeHolder}</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default OptionsList