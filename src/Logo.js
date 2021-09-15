import React from "react"
// const logWhenClicked = ()=>{
//   console.log("Esto son los pokemones")
// }
const Logo = (props) => {
    
    console.log(props)
    return (
      <header>
          <h1>{props.appName}</h1>
          <img onClick={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt='pokemon'/>
        </header>
    )
  }
  export default Logo