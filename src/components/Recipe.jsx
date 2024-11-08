import axiosInstance from '../axiosEdamam';
import axiosPantry from '../axiosPantry';
import {useState} from 'react';
import { useEffect } from 'react';
import RecipeCard from './RecipeCard';

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

    useEffect(() => {
        fetchIngredients();
    }, [])

    useEffect(() => {
        if (currentIngredients.length > 0) { 
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
            fetchRecipes();
        }
    }, [currentIngredients])


    return ( 
        <ul> 
            {
               recipes.map((item) => {
                return(
                    <li> 
                        <RecipeCard 
                        title={item.recipe.label} 
                        image={item.recipe.image}
                        />
                    </li>
                )
               })
            }
        </ul>
    )
}

export default RecipeApp;
