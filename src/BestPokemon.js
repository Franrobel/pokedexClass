import React from "react";
const BestPokemon = (props) => {
  
    return (
      <div>
        <p>My favorite Pokémon is Squirtle</p>
        <ul>
         {props.abilities.map((ability, i) => 
          <li key={i}>{ability}</li>       
        )}
        </ul>
        <p>My best pokemons are {props.BestPokemon}</p>
      </div>
    )
  }
  export default BestPokemon