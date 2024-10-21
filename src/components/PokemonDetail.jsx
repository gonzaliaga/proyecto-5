import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
    const { searchTerm } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener el Pokémon');
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pokemonData) {
        return <h1>Pokémon no encontrado</h1>;
    }

    const height = (pokemonData.height * 0.1).toFixed(1);
    const weight = (pokemonData.weight * 0.1).toFixed(1);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='outsideCard'>
            <div className="cardSearch">
                <h2 className='nameCardSearch textCardSearch'>{pokemonData.id}. {capitalizeFirstLetter(pokemonData.name)} </h2>
                <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} className='imgSearch'/>
                <div className='infoCardSearch textCardSearch'>
                <p> Altura: {height} mts</p>
                <p> Peso: {weight} kg</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
