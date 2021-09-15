import React, { useState } from "react";

const CaughtPokemon = (props) => {
  let [caught, setCatcher] = useState(0)
  function catchPokemon(){
    console.log("Catch: ", caught)
    setCatcher(caught + 1 )
    console.log("Catch: ", caught)
  }

  return (
    <div>
      <p>Caught {caught} Pokémon on {props.date}</p>
      <button onClick={catchPokemon}>Catch it!</button>
    </div>)
}
export default CaughtPokemon