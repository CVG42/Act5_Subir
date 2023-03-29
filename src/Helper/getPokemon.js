export const getPokemon = async(pokemon) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resp = await fetch( url );
    const {name,abilities,sprites,types} = await resp.json();
  
    const pokemonData = {
      pkName:name,
      pkAbilities: abilities.map( ability => ability.ability.name ),
      pkImage: sprites.front_default,
      pkTypes: types.map( type => type.type.name)
    }
  
    return pokemonData;
  }