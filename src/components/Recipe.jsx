import axiosInstance from '../axiosEdamam';
import axiosPantry from '../axiosPantry';
import {useState} from 'react';
import { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './Recipe.css';

const RecipeApp = () => {
    const [recipes, setRecipes] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState([]);

    const fetchIngredients = async () => {
        try { 
            const response = await axiosPantry.get('/');
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
            <div id="recipeContainer">
                <button onClick={() => refreshRecipes()}> Refresh </button>
                <div id="recipeGrid">
                    {
                    recipes.map((item) => {
                        return(
                            
                                <RecipeCard title={item.recipe.label} image={item.recipe.image} cals = {Math.round(item.recipe.calories)}/>
                            
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default RecipeApp;