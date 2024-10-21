import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (offset = 0, limit = 20) => {
    try {
        const { data } = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);
        
        if (!data) throw new Error('Error al capturar los datos del Pokémon');
        return data;
    } catch (error) {
        throw new Error('Error al capturar los datos del Pokémon', error);
    }
};