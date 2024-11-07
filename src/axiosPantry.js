import axios from 'axios'

const url = 'http://localhost:3000/pantry';

const axiosPantry = axios.create({
    baseURL: url,
    Timeout: 5000,
})

export default axiosPantry;