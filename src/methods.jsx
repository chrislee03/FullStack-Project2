import axiosInstance from './API/edamam.js'
import app from './API/pantry.js'


const fetchRecipe = async (query) => { 
    try { 
      const response = await axiosInstance.get('/', { 
        params: { 
          q: query
        }
      })
      console.log(response.data.hits);
      return response.data.hits;
    } catch (err) { 
      console.log(`Error: ${err.message}`);
    }
  }



  export default fetchRecipe;