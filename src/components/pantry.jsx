import axiosPantry from '../axiosInstances/axiosPantry.js'
import './pantry.css'
import {useState, useEffect} from 'react';

const PantryApp = () => {
    const [pantry, setPantry] = useState([]);
    //INPUT WOULD SET INGREDIENT --> 
    const [newIngredient, setNewIngredient] = useState("");

    const getPantry = async () => { 
        try { 
            const response = await axiosPantry.get('/pantry');
            setPantry(response.data);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const addIngredient = async () => {
        if (newIngredient.trim() == "") { 
            return alert("Can't add empty item!");
        }
        if (pantry.some((item) => item.content.toLowerCase() === newIngredient.toLowerCase())) { 
            return alert("Item is already in the pantry!");
        }
        try { 
            const response = await axiosPantry.post('/pantry', { 
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
            await axiosPantry.delete(`/pantry/${id}`);
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
        <div className="pantry">
        <h1 className="pantry-title"> My Pantry </h1>
        <div>
            <input 
                type="text"
                placeholder="Add Ingredient Here"
                value={newIngredient}
                onChange = {(e) => setNewIngredient(e.target.value)} 
                className="pantry-input"
            />
            <button className ="pantry-button add" onClick={() => addIngredient()}> 
                 +
            </button>
        </div> 
        <ul className="items-list">
            {
                pantry.map((item) => (
                    <li key={item.id} className="item">
                        {item.content}{" "}
                        <button onClick={() => deleteIngredient(item.id)} className="pantry-button remove"> 
                            - 
                        </button>
                    </li>
                ) )
            }
        </ul>
        </div>
    )
}

export default PantryApp;