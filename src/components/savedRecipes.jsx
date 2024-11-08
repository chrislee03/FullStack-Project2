import {useState, useEffect} from 'react';
import axiosPantry from '../axiosInstances/axiosPantry';

const SavedRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const validRecipes = recipes.filter(item => item.content?.recipe?.label);

    const fetchRecipes = async () => {
        const response = await axiosPantry.get('/recipes');
        setRecipes(response.data);
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    return ( 
        <>
        <h1> My Recipes </h1>
        <ul id="savedRecipes">
            {
                validRecipes.map((item) => (
                    <li key={item.id}> {item.content.recipe.label} </li>
                ))
            }
        </ul>
        </>
    )
}

export default SavedRecipes;