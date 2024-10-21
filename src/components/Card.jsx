import { useState, useEffect } from 'react';
import './Card.css'

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => setPokemonData(data))
            .catch(error => console.error('Error fetching Pokémon data:', error));
    }, [pokemon.url]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const height = (pokemonData.height * 0.1).toFixed(1)
    const weight = (pokemonData.weight * 0.1).toFixed(1)
    return (
        <div className="card">
            <h2 className='nameCard textCard'>{pokemonData.id}. {capitalizeFirstLetter(pokemon.name)} </h2>
            <img src={pokemonData.sprites?.front_default} alt={pokemon.name} />
            <div className='infoCard textCard'>
            <p> Altura: {height} mts</p>
            <p> Peso: {weight} kg</p>
            </div>
        </div>
    );
};

export default PokemonCard;
