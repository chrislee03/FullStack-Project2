import axiosInstance from '../axiosInstances/axiosEdamam';
import axiosPantry from '../axiosInstances/axiosPantry';
import {useState} from 'react';
import { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './Recipe.css';


const RecipeApp = () => {
    const [recipes, setRecipes] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState([]);

    const fetchIngredients = async () => {
        try { 
            const response = await axiosPantry.get('/pantry');
            //Want to extract only content 
            const ingredients = response.data.map((item) => item.content);
            setCurrentIngredients(ingredients);
        } catch (err) { 
            console.log(`Error: ${err.message}`);
        }
    }

    const fetchRecipes = async () => {
        try { 
            const response = await axiosInstance.get('/', {
                params: {
                    q: currentIngredients.join(',')
                }
            })
            setRecipes(response.data.hits);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const saveRecipe = async (label) => {
        try { 
            const recipe = recipes.find((t) => t.recipe.label === label)
            //uploading the recipe to the saved Recipes database
            const response = await axiosPantry.post('/recipes', {content: recipe});
            // Double check to make sure recipe was saved
            if (response) { 
                console.log("Recipe saved successfully");
            } 
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
        
        /*
        const specificRecipe = Find specific recipe from the array using .find(item.id == id)
        app.post('/recipes' (app, req) => {
            res.json(specificRecipes) //Sending specific recipe to store within the /recipes database
        })
        */
    }



    const refreshRecipes = async () => {
        await fetchIngredients();
        await fetchRecipes();
    }

    useEffect(() => {
        fetchIngredients();
    }, [])


    useEffect(() => {
        if (currentIngredients.length > 0) { 
            fetchRecipes();
        }
    }, [currentIngredients])


    return ( 
        <>
            <div className="recipeTitle">
                <div className="placeholder"></div>
                <h1>Recipes</h1>
                <button className="refreshButton" onClick={() => refreshRecipes()}> Refresh </button>
            </div>
            <div className="recipeBottom">
                    {
                    recipes.map((item) => {
                        return(
                            
                                <div> 
                                <RecipeCard title={item.recipe.label} image={item.recipe.image} cals = {Math.round(item.recipe.calories)}/>
                                <button onClick = {() => saveRecipe(item.recipe.label) }> Save </button>
                                </div>
                            
                        )
                    })
                    }
            </div>
        </>
    )
}

export default RecipeApp;