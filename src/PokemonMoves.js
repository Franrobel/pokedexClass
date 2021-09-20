import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
   
    const [pokemonData, SetPokemonData] = useState({name:"", moves:[]});
    useEffect(() => {
        
        const getData = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`)
            .then(response => response.json())
            .then(data => SetPokemonData(data))
        }
        getData();
    }, [props.pokemonId]);
    console.log("dataId", props.pokemonId)
    console.log("data.moves", pokemonData)
//if(pokemonData === null) {return  null}
    return (
        <div>
            <p>{pokemonData ? pokemonData.name :'no funciona'}'s moves:</p>
            <ul>
                {pokemonData ? pokemonData.moves.map((move, index) => {
                                        return <li key={index}>{move.move.name}</li>;
                })           :null     }
            </ul>
        </div>
    );
} 


export default PokemonMoves;

