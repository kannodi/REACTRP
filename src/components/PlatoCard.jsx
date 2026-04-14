import { usePedido } from '../context/PedidoContext';

function PlatoCard({ plato }) {
  const { pedido, agregarPlato, restarPlato, cambiarTipo, limpiarPedido } = usePedido();

  return (
    <div className='bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 border border-gray-150 m-4'>
      <div className='flex justify-between items-start'>
        <h3 className='font-bold text-gray-800 text-lg '>{plato.nombre}</h3>
        <span className='text-green-600 font-semibold text-lg'>S/ {plato.precio}</span>
      </div>
      <div>
        <span className={`text-xs font-medium px-2 py-1 rounded-lg ${plato.stock > 0
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-500'
          }`}>
          {plato.stock > 0 ? '✅ Disponible' : '❌ Agotado'}
        </span>
        <span className='ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-lg w-fit'>
          {plato.categoria}
        </span>

      </div>
      <div className='flex justify-between items-center mt-1'>
        <span className='text-gray-400 text-sm'>Stock: {plato.stock}</span>

      </div>
      <div className='flex justify-between items-center mt-1'>
        <button onClick={() => agregarPlato(plato)}
          className='justify-end mt-2  bg-yellow-500 text-white font-bold py-1 rounded hover:bg-yellow-600 p-4'>
          Agregar a comanda
        </button>
        <button onClick={() => restarPlato(plato._id)}
          className='justify-end mt-2  bg-yellow-500 text-white font-bold py-1 rounded hover:bg-yellow-600 p-4'>
          Restar de la comanda
        </button>
      </div>
      <div className='flex   items-center mt-1'>
        <button onClick={() => cambiarTipo(pedido.tipo === 'mesa' ? 'para_llevar' : 'mesa')}
          className=' mt-2  bg-yellow-500 text-white font-bold py-1 rounded hover:bg-yellow-600 p-4'>
          Cambiar Tipo</button>
        <button onClick={() => limpiarPedido()}
          className=' mt-2 ml-4 bg-yellow-500 text-white font-bold py-1 rounded hover:bg-yellow-600 p-4'>
          Limpiar Pedido</button>
      </div>
    </div>


  );
}


export default PlatoCard