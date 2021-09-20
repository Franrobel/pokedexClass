import React, {useState} from "react";

const CaughtPokemon = (props) => {
  
  let [ caught, setCaught ] = useState([])

  //const pokemons = props.BestPokemon
  //const random = pokemons[Math.floor(Math.random() * pokemons.length)];

  function catchPokemon(){
    if(pokemonNameInput === ""){
      return null
    } else {setCaught(caught.concat(pokemonNameInput))} 
    
    console.log('esto es caught' ,caught);
    //caught = props.BestPokemon.join(', ')
  }

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function handleInputChange(event){
    setPokemonNameInput(event.target.value);
    console.log(event.target.value);

  }
//TENGO QUE HACER APARECER UN POLEMON RAMDOM DE LA LISTA POR CADA VEZ QUE HAGO CLICK EN BOTON
  return (
    <div>
      <p>Caught {caught.length} Pokémon on {props.date}</p>
      <input type="text" placeholder="Caught some?" value={pokemonNameInput} onChange={handleInputChange}/>
      <button onClick={catchPokemon}>Caught!</button>
     <ul>
      {caught.map((pokemon, i) => 
          <li key={i}>{pokemon}</li>       
        )}
      </ul>
    </div>)
}
export default CaughtPokemon

// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);