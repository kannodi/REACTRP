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
    }
    const handleOcultarMesas = () => {
        setMostrarMesas(false);
    }
    const handleTomarComanda = () => {
        setMostrarComandas(true);
    };

    if (mostrarComandas) {
        return <CarritoPage />;
    }


    return (
        <>
            <div className='flex items-center m-10'>
                <button onClick={handleMostrarMesas} className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl m-2'>Mesas</button>
                <button onClick={handleOcultarMesas} className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl m-2'>Para llevar</button>
            </div>
            {mostrarMesas && (
                <div className='flex items-center m-10'>
                    {mesasMock.map(mesa => (
                        <MesaCard key={mesa.numero} numero={mesa.numero} capacidad={mesa.capacidad} estado={mesa.estado} comensales={mesa.comensales} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ComandasPages;