/* 

 const {emailTemplate} = require('./js-foundation/01-template')

require('./js-foundation/02-destructuring') 



const { getUserById } = require('./js-foundation/05-factory')



const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(2)
.then((pokemon) => console.log({pokemon}))
.catch((err) => console.log({err}))


const { buildLogger } = require('./plugins')
const logger = buildLogger('app')

logger.log('Hola mundo')

const id = 1

getUserById(id, (error, user) => {
    if(error) throw new Error('User not found with id', 1)
    console.log({user})
}) */

/* import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js')
logger.log('Hola mundo')
logger.error('Esto es algo malo') */
