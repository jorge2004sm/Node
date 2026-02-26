import { getUUID } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';
/* const {v4: uuidv4} = require('uuid')
const {getAge,} = require('../plugins/get-age.plugin')
 */


interface BuildMakerPersonOptions {
    getUUID: () => string,
    getAge: (birthdate: string) => number
}

interface PersonOptions {
    name: string,
    birthdate: string
}


export const buildPerson = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }

}


