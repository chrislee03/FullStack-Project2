import axios from 'axios';

//RAPID SEARCH API
const URL = 'https://api.edamam.com/api/recipes/v2';
const app_id = '4189e738';
const app_key = '6e7b4ed08465fd9778e754962789a367';

//creating axios instance
const axiosInstance = axios.create ({
    baseURL: URL, 
    params: {
        app_id: app_id,
        app_key: app_key,
        type: 'public',
    },
    timeout: 10000
})

export default axiosInstance;