import { useParams, Link, useNavigate } from 'react-router-dom';
import { mesasMock } from '../data/mesas.mock';
import ComandasPages from './ComandasPage'

export default function DetalleMesa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const mesa = mesasMock.find(m => String(m.id) === id);

    if (!mesa) {
        return (
            <div className='p-6 border-2 border-gray-200 rounded-xl m-20'>
                <p className='text-red-500 text-5xl font-bold mt-4 text-center'>Mesa {id} no encontrada</p>
                <button onClick={() => navigate('/comandas')}
                    className='block mx-auto m-10 bg-blue-500 text-white px-4 py-2 rounded-xl'>
                    Volver a mesas
                </button>
            </div>
        );
    }

    return (
        <div className='p-6 border-2 border-gray-200 rounded-xl m-20'>
            <Link to='/comandas' className='text-blue-500 hover:underline'>
                ← Volver a mesas
            </Link>
            <h1 className='text-5xl font-bold mt-4'>Mesa {id}</h1>
            <p className='text-2xl font-mono mt-4'>Capacidad: {mesa.capacidad} personas</p>
            <p className='text-2xl font-mono mt-4'>Estado:
                <span className={
                    mesa.estado === 'libre' ? 'text-green-500' :
                        mesa.estado === 'ocupada' ? 'text-red-500' :
                            'text-yellow-500'
                }>
                    {mesa.estado === 'libre' ? ' Libre' :
                        mesa.estado === 'ocupada' ? ' Ocupada' :
                            ' Reservada'}
                </span>
            </p>
            <p className='text-gray-600 text-2xl font-mono mt-4'>Detalle de la mesa {id}</p>
        </div >
    );
}
