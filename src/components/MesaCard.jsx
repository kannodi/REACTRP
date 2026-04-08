import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MesaCard({ numero, capacidad, estado, comensales }) {
  return (
    <div >
      <Link to={`/mesas/${numero}`} className='text-sm text-blue-500 hover:underline '>Ver detalle </Link>
      <h2>Mesa {numero}</h2>
      <p>Capacidad: {capacidad}</p>
      <p>Comensales: {comensales}</p>
      <p>Estado: {estado === "libre" ? "🟢 Libre" : estado === "ocupada" ? "🔴 Ocupada" : "🟡 Reservada"}</p>
    </div >
  )
}

MesaCard.propTypes = {
  numero: PropTypes.number.isRequired,
  estado: PropTypes.string.isRequired,
  capacidad: PropTypes.number,
  comensales: PropTypes.number,
}

export default MesaCard