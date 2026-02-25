const axios = require('axios')

const buildHttpClient = (headers) => {
    return {
        get: async (url) => {
            const { data } = await axios.get(url)
            return data


        }

    }
}

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url)
        return data


    }


}


module.exports = {
    http: httpClientPlugin,
}