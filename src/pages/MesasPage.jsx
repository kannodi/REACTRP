// pages/MesasPage.jsx
import { mesasMock } from '../data/mesas.mock.js'
import MesaCard from '../components/MesaCard'

function MesasPage() {
  return (
    <div>
      <h1 className='m-7'>Mesas del Restaurante</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-7'>
        {mesasMock.map(mesa => (
          <MesaCard
            key={mesa.id}
            numero={mesa.numero}
            capacidad={mesa.capacidad}
            estado={mesa.estado}
            comensales={mesa.comensales}
          />
        ))}
      </div>
    </div>
  )
}

export default MesasPage