const {http} = require('../plugins')

export const getPokemonById = async (id: string | number): Promise<string> => {

     const url = `https://pokeapi.co/api/v2/pokemon/${id}`

     const pokemon = await http.get(url)


/*     const response = await fetch(url)
    const pokemon = await response.json() */

/*     return Promise.resolve(10)
 */
    /*return fetch(url)
    .then((response) => response.json())
    .then(() => {throw new Error('Pokemon no existe')})
    .then((pokemon) => pokemon.name)
    } */

/*     throw new Error('Pokemon no existe')
 */
    return pokemon.name
}
