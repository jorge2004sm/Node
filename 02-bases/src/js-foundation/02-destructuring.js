console.log(process.env.PORT ?? 3000)


const { SHELL,  npm_config_cache, COMPUTERNAME } = process.env

/* console.table({SHELL, npm_config_cache, COMPUTERNAME})
 */
const characters = ['Flash', 'Superman', 'Batman', 'Green Lantern']

const [, , , batman] = characters
