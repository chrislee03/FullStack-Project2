import {useState, useEffect} from 'react';
import axiosPantry from '../axiosInstances/axiosPantry';

const savedRecipes = () => {
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
                    <li> {item.content}</li>
                ))
            }
        </ul>
        </>
    )
}

export default savedRecipes;