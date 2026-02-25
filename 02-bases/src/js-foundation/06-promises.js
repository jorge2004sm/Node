const getPokemonById = async (id) => {

     const url = `https://pokeapi.co/api/v2/pokemon/${id}`


    const response = await fetch(url)
    const pokemon = await response.json()

    return Promise.resolve(10)

    /*return fetch(url)
    .then((response) => response.json())
    .then(() => {throw new Error('Pokemon no existe')})
    .then((pokemon) => pokemon.name)
    } */

    throw new Error('Pokemon no existe')

    return pokemon.name
}

module.exports =  getPokemonById
