//repasar
import { useState } from 'react';
import { mesasMock } from '../data/mesas.mock.js';
import OrderForm from '../components/OrderForm';
import ListadoComanda from './ListadoComanda.jsx';
import MesaCard from '../components/MesaCard';

const ComandasPages = () => {
    // Usamos un estado para recordar qué mesa seleccionó el mesero [cite: 893-894]
    const [mesaSeleccionada, setMesaSeleccionada] = useState(mesasMock[0].numero);
    const [mostrarComandas, setMostrarComandas] = useState(false);
    const [mostrarMesas, setMostrarMesas] = useState(true);

    const handleMostrarMesas = () => {
        setMostrarMesas(true);
        setMostrarComandas(false);
    }
    /*const handleOcultarMesas = () => {
        setMostrarMesas(false);
    }*/
    const handleTomarComanda = () => {
        setMostrarMesas(false);
        setMostrarComandas(true);
    };

    const handleSeleccionarMesa = (numero) => {
        setMesaSeleccionada(numero);
        handleTomarComanda();
    };

    if (mostrarComandas) {
        return <ListadoComanda mesaSeleccionada={mesaSeleccionada} />;
    }

    return (
        <>
            <div className='flex items-center ml-10 mb-3 gap-2 mt-3'>
                <button onClick={handleMostrarMesas} className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl m-2'>Mesas</button>
                <button onClick={() => { handleTomarComanda(); setMesaSeleccionada(null); }} className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl m-2'>Para llevar</button>
            </div>
            {mostrarMesas && (
                <div className='grid grid-cols-5 gap-5 ml-10 mr-10'>
                    {mesasMock.map(mesa => (
                        <button disabled={mesa.estado === 'fuera_de_servicio'} onClick={() => handleSeleccionarMesa(mesa.numero) && handleTomarComanda()} key={mesa.id}
                            className={`${mesa.estado === 'libre' ? 'bg-green-500 hover:bg-green-700' :
                                mesa.estado === 'ocupada' ? 'bg-red-500 hover:bg-red-700' :
                                    'bg-gray-500 hover:bg-gray-700'} text-white text-2xl font-bold p-2 rounded-xl`}>
                            <MesaCard numero={mesa.numero} capacidad={mesa.capacidad} estado={mesa.estado} comensales={mesa.comensales} />
                        </button>
                    ))}
                </div>
            )}

        </>
    );
};

export default ComandasPages;