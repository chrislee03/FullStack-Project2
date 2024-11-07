
import axiosPantry from '../axiosPantry.js'
import {useState, useEffect} from 'react';

const PantryApp = () => {
    const [pantry, setPantry] = useState([]);
    //INPUT WOULD SET INGREDIENT --> 
    const [newIngredient, setNewIngredient] = useState("");

    const getPantry = async () => { 
        try { 
            const response = await axiosPantry.get('/');
            setPantry(response.data);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const addIngredient = async () => {
        if (pantry.some((item) => item.content.toLowerCase() === newIngredient.toLowerCase())) { 
            return alert("Item is already in the pantry!");
        }
        try { 
            const response = await axiosPantry.post('/', { 
                content: newIngredient
            })
            setPantry([...pantry, response.data]);
            setNewIngredient(""); 
        } catch (err) { 
            console.log(`Error: ${err.message}`);
        }
    }

    const deleteIngredient = async (id) => {
        try {
            //delete from API
            await axiosPantry.delete(`/${id}`);
            //delete from currentPantry
            setPantry(pantry.filter((t) => t.id !== id));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    useEffect( () => {
        getPantry()
    }, [] ); 

    return ( 
        <>
        <h1> Pantry </h1>
        <div className="pantryInput">
            <input 
                type="text"
                placeholder="Add Ingredient Here"
                value={newIngredient}
                onChange = {(e) => setNewIngredient(e.target.value)} 
            />
            <button className ="add" onClick={() => addIngredient()}> 
                + 
            </button>
        </div> 
        <ul>
            {
                pantry.map((item) => (
                    <li key={item.id}>
                        {item.content}{" "}
                        <button onClick={() => deleteIngredient(item.id)}> x </button>
                    </li>
                ) )
            }
        </ul>
        </>
    )
}

export default PantryApp;