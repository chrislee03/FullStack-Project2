import axios from 'axios'

const url = '://localhost:5173http';

const axiosPantry = axios.create({
    baseURL: url,
    Timeout: 5000,
})

export default axiosPantry;