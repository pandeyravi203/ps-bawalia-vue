const {serverUrl} = require('../properties') 
const axios = require('axios')
const slsaxios = axios.create({
    baseURL:serverUrl
})

export default slsaxios
