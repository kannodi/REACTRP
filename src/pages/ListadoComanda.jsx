import { useState, useEffect } from 'react';
import { getPlatos } from '../services/api';
import { usePedido } from '../context/PedidoContext';

export default function ListadoComanda({ mesaSeleccionada }) {
    const { pedido } = usePedido();
    const [platos, setPlatos] = useState([]);
    const [comanda, setComanda] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function cargarDatos() {
            try {
                setLoading(true);
                const data = await getPlatos();
                if (!Array.isArray(data)) {
                    throw new Error("La respuesta de la API no es válida (verifica VITE_API_URL)");
                }
                setPlatos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        cargarDatos();
    }, []);

    if (loading) return <p className='text-blue-500 animate-pulse m-4'>Cargando la comanda...</p>;
    if (error) return <p className='bg-red-100 text-red-500 m-4'>Error: {error}</p>;


    function agregarPlato(plato) {
        const existe = comanda.find((item) => item._id === plato._id);
        if (existe) {
            setComanda(comanda.map((item) =>
                item._id === plato._id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
        } else {
            setComanda([...comanda, { ...plato, cantidad: 1 }]);
        }
    }


    function quitarPlato(_id) {
        setComanda(comanda.filter((item, indexActual) => indexActual !== _id));
    }

    function restarPlato(platoInput) {
        // Buscamos el plato que queremos restar
        const platoEnComanda = comanda.find((item) => item._id === platoInput._id);
        if (platoEnComanda.cantidad === 1) {
            // Si solo queda 1 y le damos a restar, quitamos el plato completamente del arreglo
            setComanda(comanda.filter((item) => item._id !== platoInput._id));
        } else {
            // Si hay más de 1, simplemente le restamos -1 a su cantidad actual
            setComanda(comanda.map((item) =>
                item._id === platoInput._id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ));
        }
    }
    function limpiarComanda() {
        setComanda([]);
    }

    //const total = comanda.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    function total() {
        let total = 0;
        comanda.forEach(item => {
            total += item.precio * item.cantidad;
        });
        return total;
    }

    return (
        <div className='m-10 flex flex-col gap-2 justify-start'>
            <h2 className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl mb-2'> 🧾NUEVA COMANDA</h2>


            <div className='p-6'>
                <h1 className='text-2xl font-bold mb-4'>Comanda activa</h1>
                <p className='text-gray-500 mb-2'>
                    Tipo: {pedido.tipo} · Estado: {pedido.estado}
                </p>
                {pedido.items.length === 0 ? (
                    <p className='text-gray-400'>No hay items en la comanda</p>
                ) : (
                    <ul>
                        {pedido.items.map((item, i) => (
                            <li key={i} className='flex justify-between py-2 border-b'>
                                <span>{item.nombre} x{item.cantidad}</span>
                                <span>S/ {(item.precioUnitario * item.cantidad).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <p className='font-bold text-right mt-4'>Total: S/ {pedido.total.toFixed(2)}</p>
            </div>



            <div className='grid grid-cols-2 gap-6'>
                {/* Columna izquierda — platos */}
                <div className='flex flex-col gap-3'>
                    {platos.map(plato => (
                        <div className='flex justify-between items-center' key={plato._id}>
                            <strong className='px-2 py-1'>{plato.nombre} — S/ {plato.precio}</strong>
                            <button className='bg-gray-200 rounded-xl px-2 py-1' onClick={() => agregarPlato(plato)}>Agregar</button>
                        </div>
                    ))}
                </div>

                {/* Columna derecha — comanda */}
                <div className='flex flex-col gap-3 border border-gray-400 rounded-xl p-2'>
                    <h2 className='bg-yellow-500 text-white text-md font-bold p-3 gap-5 rounded-xl flex justify-between items-center'>
                        <span>🛒 LISTADO DE COMANDA</span>
                        <span> {mesaSeleccionada ? `Mesa ${mesaSeleccionada}` : 'PARA LLEVAR'} </span>
                    </h2>
                    <span className='flex justify-between items-center'><h3>Total de pedidos: ({comanda.length})</h3>
                        <button className='border border-red-400 rounded-xl hover:bg-red-400 hover:text-white px-2 py-1'
                            onClick={limpiarComanda}>Limpiar Comanda</button>
                    </span>
                    {comanda.map((item, index) => (
                        <div className='grid grid-cols-4 justify-between items-center m-2' key={index}>
                            <strong>{item.nombre}</strong>
                            <div className='flex justify-between items-center'>
                                <button className='font-bold bg-gray-200 border border-gray-400 rounded-full px-3 py-1' onClick={() => restarPlato(item)}> - </button>
                                <span>{item.cantidad}</span>
                                <button className='font-bold bg-gray-200 border border-gray-400 rounded-full px-3 py-1' onClick={() => agregarPlato(item)}> + </button>
                            </div>
                            <strong className='text-center'> S/ {item.precio * item.cantidad}</strong>
                            <button onClick={() => quitarPlato(index)}>🗑️</button>
                        </div>
                    ))}
                    <div className='flex justify-between items-center bg-gray-200 border border-gray-400 rounded-xl p-2'>
                        <strong>Total: S/ {total()}</strong>
                        <button className='bg-gray-200 border border-black rounded-xl hover:bg-black hover:text-white px-2 py-1 active:scale-90 '>Enviar Comanda</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
