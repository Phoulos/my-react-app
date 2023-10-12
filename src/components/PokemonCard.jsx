import React from 'react';

const PokemonCard = () => {
    return (
        <figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
            <figcaption>Bulbasaur</figcaption>
        </figure>
    );
}

export default PokemonCard;


const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard2() {
    const pokemon = pokemonList[0];
    return (
        // Utilisez les données de pokemon pour afficher les informations dynamiquement
        <div>
            <h2>{pokemon.name}</h2>
            {/* ... Autres informations ... */}
        </div>
    );
}

