//repasar
import { useState } from 'react';
import { mesasMock } from '../data/mesas.mock.js';
import OrderForm from '../components/OrderForm';
import CarritoPage from './CarritoPage';
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
        return <CarritoPage mesaSeleccionada={mesaSeleccionada} />;
    }


    return (
        <>
            <div className='flex items-center m-10 gap-2'>
                <button onClick={handleMostrarMesas} className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl m-2'>Mesas</button>
                <button onClick={() => { handleTomarComanda(); setMesaSeleccionada(null); }} className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl m-2'>Para llevar</button>
            </div>
            {mostrarMesas && (
                <div className='grid grid-cols-3 gap-5 m-10'>
                    {mesasMock.map(mesa => (
                        <button onClick={() => handleSeleccionarMesa(mesa.numero) && handleTomarComanda()} key={mesa.numero}
                            className='bg-gray-500 hover:bg-green-500 text-white text-2xl font-bold p-2 rounded-xl'>
                            <MesaCard numero={mesa.numero} capacidad={mesa.capacidad} estado={mesa.estado} comensales={mesa.comensales} />
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ComandasPages;