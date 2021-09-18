import React, { useState, useEffect } from "react";

function PokemonMoves() {
   
    const [pokemonData, SetPokemonData] = useState([]);
    useEffect(() => {
        
        const getData = () => {
            fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(response => response.json())
            .then(data => SetPokemonData(data))
        }
        getData();
    }, []);
    console.log("data", pokemonData)

    return (
        <div>
            <p>{pokemonData.name}'s moves:</p>
            <ul>
                {pokemonData.moves ? pokemonData.moves.map((move, index) => {
                    return <li key={index}>{move.move.name}</li>;
                }): null}
            </ul>
        </div>
    );
} 


export default PokemonMoves;

