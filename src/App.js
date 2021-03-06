/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
//import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
// const Logo = (props) => {
//   const appName = "Pokedex"
//   return (
//   <header>
//   <div>
//      <h1>{appName}</h1>
//      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon"/>
//   </div>
// </header>)
// }
// const BestPokemon = () =>{
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
//   return (
//     <div>
//       <p>My best Pokemon is Squirtle</p>
//       <ul>
//         {abilities.map((abil, index)=> (
//          <li key={index}>{abil}</li>
//         ))}
//       </ul>
//   </div>
//   )}

// const CaughtPokemon = () => {
//   const date = new Date().toLocaleDateString()
//     return <p>Caught 0 pokemon in {date}</p>
// }
function App() {
  const logWhenClicked = () => {
    console.log("Esto son los pokemones")
  }
  return (
    <>
      <div>
        <Logo handleClick={logWhenClicked} appName="Pokedex" />
        <BestPokemon
          abilities={['Anticipation', 'Adaptability', 'Run-Away']}
          BestPokemon={["pikachu, ", "squirtle, ", "bulbazur"]}
        />
        <CaughtPokemon
          BestPokemon={["pikachu", "squirtle", "bulbazur"]}
          date={new Date().toLocaleDateString()} />
          <PokemonMovesSelector />
          <PokemonCity />
      </div>
    </>
  )
}
export default App;

// const Logo = () => {
//   const appName = "Pokedex"
//   return (
//     <header>
//         <h1>{appName}</h1>
//         <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt='pokemon'/>
//       </header>
//   )
// }
// const CaughtPokemon = ()=>{
//   const date = new Date().toLocaleDateString()
//   return(
//     <p>Caught 0 Pok??mon on {date}</p>
//   )
// }
// const BestPokemon = () => {
//   const BestPokemon = ["pikachu ", "squirtle ", "bulbazur"]
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
//   return (
//     <div>
//       <p>My favorite Pok??mon is Squirtle</p>
//       <ul>
//        {abilities.map((ability, i) => 
//         <li key={i}>{ability}</li>       
//       )}
//       </ul>
//     </div>
//   )
// }
