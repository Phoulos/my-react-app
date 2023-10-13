import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <figure>
            <img src={pokemon.imgSrc} alt="Bulbasaur" />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;

/* 
function PokemonCard2() {
    const pokemon = pokemonList[0];
    return (
        // Utilisez les données de pokemon pour afficher les informations dynamiquement
        <div>
            <h2>{pokemon.name}</h2>
        </div>
    );
}

function PokemonCard(props) {
    console.log(props);
    // Reste du code du composant
}
 */