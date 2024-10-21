import { useEffect, useState } from 'react';
import { getPokemon } from '../services/apiPokemon'; 
import PokemonCard from './Card';
import './PokemonList.css';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const pokemonsPerPage = 20; 
    const maxPokemons = 151; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const offset = (currentPage - 1) * pokemonsPerPage;
                const data = await getPokemon(offset, pokemonsPerPage);
                setPokemons(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentPage]); 

    const nextPage = () => {
        if (currentPage < Math.ceil(maxPokemons / pokemonsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="pokemon-list-container">
            <div className="pokemon-list">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>

            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button onClick={nextPage} disabled={currentPage >= Math.ceil(maxPokemons / pokemonsPerPage)}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default PokemonList;