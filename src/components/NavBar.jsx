import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar({ nombreRestaurante = "Restaurante Raul" }) {
    const navigate = useNavigate();
    const [sesion, setSesion] = useState(!!localStorage.getItem('token'));
    //si hay token en el localstorage, setSesion a true
    useEffect(() => {
        const token = localStorage.getItem('token');
        setSesion(!!token);
    }, []);
    //cerrar sesion eliminando en token del localstorage
    const botonLogout = () => {
        if (confirm('¿Estas seguro de cerrar sesión?')) {
            localStorage.removeItem('token');
            setSesion(false);
            navigate('/login');
        }
    }
    const AccionesNav = ({ isActive }) => {
        isActive
            ? 'text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1'
            : 'hover:text-yellow-300 transition-colors'
    }

    return (
        <>
            <nav className="flex items-center justify-between px-7 bg-blue-400">
                <h1 className='  text-white text-4xl p-7' align='center' width='100%' height='100% '>{nombreRestaurante}</h1>
                <div className=' flex gap-2'>
                    <NavLink to='/menu' className="text-white font-bold text-xl rounded-full px-1 py-1 w-fit m-2 ">Menu</NavLink>
                    <NavLink to='/comandas' className="text-white font-bold text-xl rounded-full px-1 py-1 w-fit m-2 ">Comandas</NavLink>
                    <NavLink to='/carta' className="text-white font-bold text-xl rounded-full px-1 py-1 w-fit m-2 ">Carta</NavLink >
                </div >
                <div>
                    {sesion ? (
                        <button onClick={botonLogout} className="text-white font-bold text-xl rounded-full px-1 py-1 w-fit m-2 flex justify-end">SALIR</button>
                    ) : (
                        <button onClick={navigate('/login')} className="text-white font-bold text-xl rounded-full px-1 py-1 w-fit m-2 flex justify-end">ENTRAR</button>
                    )}
                </div>
            </nav >
        </>
    );
}

NavBar.propTypes = {
    nombreRestaurante: PropTypes.string
};

export default NavBar