import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MesaCard({ numero, capacidad, estado, comensales }) {
  return (
    <div className='p-10' >
      <Link to={`/mesas/${numero}`} className='text-white hover:underline text-center text-bold'>Ver detalle </Link>
      <h2 className='text-center text-4xl m-4'>Mesa {numero}</h2>
      {/*<p>Capacidad: {capacidad}</p>
      <p>Comensales: {comensales}</p>*/}
      <p className='mt-2 text-center'>{estado === "libre" ? "Libre" : estado === "ocupada" ? "Ocupada" : "Fuera de servicio"}</p>
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