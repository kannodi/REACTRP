import { useParams, Link } from 'react-router-dom';

export default function DetalleMesa() {
    const { id } = useParams();

    return (
        <div className='p-6'>
            <Link to='/mesas' className='text-blue-500 hover:underline'>
                ← Volver a mesas
            </Link>
            <h1 className='text-2xl font-bold mt-4'>Mesa {id}</h1>
            <p className='text-gray-600'>Detalle de la mesa {id}</p>
        </div>
    );
}
