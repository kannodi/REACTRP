import { useState, useEffect } from 'react';
import PlatoCard from '../components/PlatoCard';
import { getPlatos } from '../services/api';
import { usePedido } from '../context/PedidoContext';

function CartaPage() {
  const [platos, setPlatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { pedido } = usePedido();
  const totalItems = pedido.items.reduce((acc, i) => acc + i.cantidad, 0);

  useEffect(() => {
    async function cargarPlatos() {
      try {
        setLoading(true);
        const data = await getPlatos();
        setPlatos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    cargarPlatos();
  }, []);

  if (loading) return <p className='text-blue-500 animate-pulse m-4'>Cargando la carta...</p>;
  if (error) return <p className='bg-red-100 text-red-500 m-4'>Error: {error}</p>;

  return (
    <div className='m-10'>
      <h1 className="bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl mb-2">Carta del Restaurante</h1>
      <ul>
        {platos.map(plato => (
          <PlatoCard
            key={plato._id}
            plato={plato}
          />
        ))}
      </ul>
      <nav>
        {/* Badge visible en MenuPage */}
        {totalItems > 0 && (
          <div className='fixed bottom-4 right-4 bg-yellow-500 text-white
                        rounded-full px-4 py-2 font-bold shadow-lg'>
            Comanda: {totalItems} items
          </div>
        )}
      </nav>
    </div>
  )
}

export default CartaPage