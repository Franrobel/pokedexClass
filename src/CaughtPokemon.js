import React, {useState} from "react";

const CaughtPokemon = (props) => {
  
  let [ caught, setCaught ] = useState([])
  console.log(caught)
  
  function catchPokemon(){
    setCaught(caught = props.BestPokemon.join(', '))
  }
//TENGO QUE HACER APARECER UN POLEMON RAMDOM DE LA LISTA POR CADA VEZ QUE HAGO CLICK EN BOTON
  return (
    <div>
      <p>Caught {caught} Pokémon on {props.date}</p>
      <button onClick={catchPokemon}>Caught!</button>
     <ul>
      {props.BestPokemon.map((pokemon, i) => 
          <li key={i}>{pokemon}</li>       
        )}
      </ul>
    </div>)
}
export default CaughtPokemon

// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);