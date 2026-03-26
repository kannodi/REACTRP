import { supabase } from './supabase';

export async function getPlatos() {
    // Usamos el cliente de Supabase para obtener los datos de la tabla 'platillos'
    const { data, error } = await supabase
        .from('platillos')
        .select('*');
        
    if (error) {
        console.error("Error obteniendo platos:", error);
        throw new Error(error.message);
    }
    
    return data;
}