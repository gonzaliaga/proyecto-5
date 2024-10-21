import { useState } from 'react';

const BuscarPokemon = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      console.log('Buscando:', searchTerm);
    } else {
      console.log('Por favor, ingresa un nombre o número válido');
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Pokémon</h2>
      <input
        type="text"
        placeholder="Ingresa el nombre o número"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BuscarPokemon;