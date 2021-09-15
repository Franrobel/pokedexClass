import React from "react";
const BestPokemon = (props) => {
    const {BestPokemon} = props
    const {abilities} = props
    return (
      <div>
        <p>My favorite Pokémon is Squirtle</p>
        <ul>
         {abilities.map((ability, i) => 
          <li key={i}>{ability}</li>       
        )}
        </ul>
        <p>My best pokemons are {BestPokemon}</p>
      </div>
    )
  }
  export default BestPokemon