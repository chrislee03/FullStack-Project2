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
        <ul id="savedRecipes">
            {
                recipes.map((item) => (
                    <li> {item.content}</li>
                ))
            }
        </ul>
    )
}