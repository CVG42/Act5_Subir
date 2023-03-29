import React, { useEffect, useState } from 'react'
import { PokemonElement } from './components/PokemonElement'
import { getPokemon } from './Helper/getPokemon'

export const FetchApp = () => {

    const [pokemon, setPokemon] = useState("mew")
    const [pkObj, setpkObj] = useState({})
    
    //con useEffect se ejecute cada vez que se renderea el componente, con los "[]" se ejectua una sola vez al principio, con "[hookState]" se ejecuta cada vez que cambie el hookState
    useEffect(() => {
        pkFromAPI()
    }, [])

    const pkFromAPI = async () => {
        const obj = await getPokemon(pokemon);
        setpkObj(obj);
    }

    const onSubmitPokemon = (event) => {
        event.preventDefault(); 
        pkFromAPI()
    }
    const HandleInput = ({target}) => {setPokemon(target.value)}

  return (
    <>
        <h3>GetPokemonsApp</h3>
        <form onSubmit={onSubmitPokemon}>
            <fieldset>
                <legend>New Pokemon</legend>
                Nombre: <input type="text" value={pokemon} onChange={ HandleInput } />
                <br />
                <button type='submit'>Buscar</button>
            </fieldset>
        </form>
        <PokemonElement 
            pkName={pkObj.pkName}
            pkAbilities={pkObj.pkAbilities}
            pkImage={pkObj.pkImage}
            pkTypes={pkObj.pkTypes}
        />
    </>
  )
}
