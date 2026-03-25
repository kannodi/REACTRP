// src/pages/CarritoPage.jsx
import { useState, useEffect } from 'react';
import { platosMock } from '../data/platos.mock';

export default function CarritoPage() {
    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {//cargar
        setPlatos(platosMock);        // Hoy: mock. Día 6: Axios a /api/platos
    }, []);  // ← [] = solo al montar

    //--- funcion de cargado
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPlatos(platosMock);
            setLoading(false);
        }, 800);
    }, []);

    // En el JSX — antes del return principal:
    if (loading) return <p>Cargando menú...</p>;
    //---


    function agregarPlato(plato) {
        const existe = carrito.find((item) => item.id === plato.id);
        if (existe) {
            setCarrito(carrito.map((item) =>
                item.id === plato.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
        } else {
            setCarrito([...carrito, { ...plato, cantidad: 1 }]);
        }
    }


    function quitarPlato(id) {
        setCarrito(carrito.filter((item, indexActual) => indexActual !== id));
    }

    function restarPlato(platoInput) {
        // Buscamos el plato que queremos restar
        const platoEnCarrito = carrito.find((item) => item.id === platoInput.id);
        if (platoEnCarrito.cantidad === 1) {
            // Si solo queda 1 y le damos a restar, quitamos el plato completamente del arreglo
            setCarrito(carrito.filter((item) => item.id !== platoInput.id));
        } else {
            // Si hay más de 1, simplemente le restamos -1 a su cantidad actual
            setCarrito(carrito.map((item) =>
                item.id === platoInput.id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ));
        }
    }

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    return (
        <div>
            <h2>Armar Comanda</h2>
            {platosMock.map(plato => (
                <div key={plato.id}>
                    <span>{plato.nombre} — S/ {plato.precio}</span>
                    <button onClick={() => agregarPlato(plato)}>Agregar</button>
                </div>
            ))}
            {carrito.map((item, index) => (
                <div key={index}>
                    <span>{item.nombre} X {item.cantidad} Total: S/ {item.precio * item.cantidad}</span>
                    <button onClick={() => restarPlato(item)}>Limpiar comanda</button>
                    <button onClick={() => quitarPlato(index)}>Quitar</button>
                </div>
            ))}
            <h3>Comanda ({carrito.length} ítems)</h3>
        </div>
    );
}
