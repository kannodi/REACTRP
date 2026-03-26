import axios from 'axios';

// Leemos la URL desde el archivo .env.local
const BASE_URL = import.meta.env.VITE_API_URL;

export async function getPlatos() {
    // Hacemos la petición al endpoint de platos
    const response = await axios.get(`${BASE_URL}/api/platos`);
    return response.data; // Axios ya nos da el JSON listo
}