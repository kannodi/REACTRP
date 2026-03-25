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
        setCarrito([...carrito, plato]);
    }

    function quitarPlato(id) {
        setCarrito(carrito.filter((item, indexActual) => indexActual !== id));
    }

    return (
        <div>
            <h2>Armar Comanda</h2>
            {platosMock.map(plato => (
                <div key={plato._id}>
                    <span>{plato.nombre} — S/ {plato.precio}</span>
                    <button onClick={() => agregarPlato(plato)}>Agregar</button>
                </div>
            ))}
            {carrito.map((item, index) => (
                <div key={index}>
                    <span>{item.nombre}</span>
                    <button onClick={() => quitarPlato(index)}>Quitar</button>
                </div>
            ))}
            <h3>Comanda ({carrito.length} ítems)</h3>
        </div>
    );
}
