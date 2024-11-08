import {useState, useEffect} from 'react';
import axiosPantry from '../axiosInstances/axiosPantry';

const SavedRecipes = () => {
    const [recipes, setRecipes] = useState([]);

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
                recipes.map((item) => (
                    <li key={item.id}> item </li>
                ))
            }
        </ul>
        </>
    )
}

export default SavedRecipes;