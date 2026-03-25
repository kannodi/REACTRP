// src/pages/CarritoPage.jsx
import { useState } from 'react';
import { platosMock } from '../data/platos.mock';


export default function CarritoPage() {
  const [carrito, setCarrito] = useState([]);


  function agregarPlato(plato) {
    setCarrito([...carrito, plato]);
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
      <h3>Comanda ({carrito.length} ítems)</h3>
    </div>
  );
}
