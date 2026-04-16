import { useState } from 'react';
import { mesasMock } from '../data/mesas.mock.js';
import { getMesas } from '../services/api.js';
import MesaCard from '../components/MesaCard.jsx';
import { useNavigate } from 'react-router-dom';
import { usePedido } from '../context/PedidoContext.jsx';

const MesasPage = () => {
    const [mesas, setMesas] = useState([mesasMock]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { asignarMesa } = usePedido();
    const navigate = useNavigate();

    const ESTADO_CLASES = {
        disponible: 'bg-green-100 border-green-400 text-green-800',
        ocupada: 'bg-red-100 border-red-400 text-red-800',
        reservada: 'bg-yellow-100 border-yellow-400 text-yellow-800',
        fuera_servicio: 'bg-gray-100 border-gray-400 text-gray-600',
    };
    /*
    useEffect(() => {
        getMesas()
            .then(data => setMesas(data))
            .catch(err => setError('No se pudieron cargar las mesas'))
            .finally(() => setLoading(false));
    }, []);*/

    const handleSeleccionarMesa = (mesa) => {
        asignarMesa(mesa.id);
        navigate(`/mesas/ListadoComanda`);
    };

    if (loading) return <p className='p-6 text-gray-500'>Cargando mesas...</p>;
    if (error) return <p className='p-6 text-red-500'>{error}</p>;

    return (
        <>
            <div className='p-6'>
                <h1 className='text-2xl font-bold mb-6'>Mesas del restaurante</h1>

                <div className='grid grid-cols-5 gap-5 ml-10 mr-10 mt-10 '>
                    {mesasMock.map(mesa => (
                        <div key={mesa.id} className={`flex flex-col items-center border-2 rounded-xl p-4 ${ESTADO_CLASES[mesa.estado]}`} >
                            <MesaCard id={mesa.id} capacidad={mesa.capacidad} estado={mesa.estado} comensales={mesa.comensales} />
                            {mesa.estado === 'disponible' && (
                                <button onClick={() => handleSeleccionarMesa(mesa.id)}
                                    className={`${mesa.estado === 'disponible' ? 'bg-green-500 hover:bg-green-700' :
                                        mesa.estado === 'ocupada' ? 'bg-red-500 hover:bg-red-700' : mesa.estado === 'reservada' ? 'bg-yellow-500 hover:bg-yellow-700' :
                                            'bg-gray-500 hover:bg-gray-700'} text-white text-2xl font-bold rounded-xl px-6 py-2`}>
                                    Tomar Comanda
                                </button>
                            )}
                        </div>
                    ))}



                    {/*mesasMock.map(mesa => (
                        <button disabled={mesa.estado === 'fuera_de_servicio'} onClick={() => handleSeleccionarMesa(mesa.numero) && handleTomarComanda()} key={mesa.id}
                            className={`${mesa.estado === 'libre' ? 'bg-green-500 hover:bg-green-700' :
                                    mesa.estado === 'ocupada' ? 'bg-red-500 hover:bg-red-700' :
                                        'bg-gray-500 hover:bg-gray-700'} text-white text-2xl font-bold p-2 rounded-xl`}>
                            <MesaCard numero={mesa.numero} capacidad={mesa.capacidad} estado={mesa.estado} comensales={mesa.comensales} />
                        </button>
                    ))*/}
                </div>
            </div >

        </>
    );
};

export default MesasPage;