import { useState, useEffect } from 'react'
import axiosInstance from './API/edamam.js'
import './App.css'
import Navbar from './Navbar'

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


function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  
  useEffect(() => {
    const getRecipes = async () => { 
      const data = await fetchRecipe(input);
      setRecipes(data);
    };
    getRecipes();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div id="home">
        <div id="pantry">

        </div>
        <div id="recipes">

        </div>
      </div>
    <h1>Recipes List </h1> 
    {
      recipes.map( (item, index) => { 
        return ( 
          <div key={index}> 
          <h2> 
            {item.recipe.label}
            <img src={item.recipe.image}/>
          </h2>
          
          </div>
        )
      })
    }
    </>
  )
}

export default App