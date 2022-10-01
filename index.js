const pokedex = document.querySelector('#pokedex')

console.log(pokedex)

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=150`
  const res = await fetch(url)
  const data = await res.json()
  const pokemon = data.results.map((result, index) => ({
    name: result.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
  }))
  console.log(data.results)
  displayPokemon(pokemon)
};

const displayPokemon = (pokemon) => {
    console.log(pokemon)

    const pokemonHTMLString = pokemon.map(poke => `
    <li class='card'>
        <img class='card-image' src='${poke.image}' />
        <h2 class='card-title'>${poke.id}. ${poke.name}</h2>
        <p class='card-subtitle'>Type: ${poke.type}</p>
    </li>
    `).join('')
    pokedex.innerHTML = pokemonHTMLString;
}


fetchPokemon();
