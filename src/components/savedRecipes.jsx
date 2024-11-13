import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard.jsx';
import axiosPantry from '../axiosInstances/axiosPantry';
import './SavedRecipes.css';

const SavedRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const validRecipes = recipes.filter(item => item.content?.recipe?.label);

    const fetchRecipes = async () => {
        const response = await axiosPantry.get('/recipes');
        setRecipes(response.data);
    }

    const deleteSave = async (id) => {
        await axiosPantry.delete(`/recipes/${id}`);
        const updatedRecipes = recipes.filter((t) => t.id !== id);
        setRecipes(updatedRecipes);
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    return ( 
        <>
        <h1 id='Saved-Recipes-Title'> My Recipes </h1>
        <ul id="saved-container">
            {
                validRecipes.map((item) => (
                    <li key={item.id} className="saved-item"> 
                        <RecipeCard 
                            image={item.content.recipe.image}
                            title={item.content.recipe.label}
                            cals={Math.round(item.content.recipe.calories)}
                        />
                
                        <button onClick={() => deleteSave(item.id)}> X </button>
                     </li>
                ))
            }

        </ul>
        </>
    )
}

export default SavedRecipes;