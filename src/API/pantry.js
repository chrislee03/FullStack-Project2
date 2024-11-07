import express from 'express'
import cors from 'cors';

//PANTRY API
const port = 3000;
const app = express();

app.use(express.json());
//ENABLES CORS
app.use(cors());

//DATABASE
let pantry = [];

//GET ALL INGREDIENTS IN PANTRY
//NEED TO IMPORT DATA FROM DATABASE
app.get('/pantry', (req, res) => {
    try { 
        res.json(pantry);
    } catch (err) { 
        console.log(`Error: ${err.message}`);
    }
})

//GET SINGULAR INGREDIENT BASED ON ID
app.get('/pantry/:id', (req, res) => { 
    try { 
        const id = parseInt(req.params.id);
        const item = pantry.find((t) => t.id === id);
        if (item) { 
            res.json(item);
        } else { 
            res.status(404).send("Item not found");
        }  
    } catch (err) {
        console.log(`Error: ${err.message}`);
        res.status(500).send("Server Error");
    }
})

//POST to ADD INGREDIENTS TO PANTRY
app.post('/pantry', (req, res) => {
    try {
        const newIngredient = { 
            id: pantry.length + 1,
            content: req.body.content,
        }
        pantry.push(newIngredient);
        res.status(201).json(newIngredient);
    } catch (err) { 
        console.log(`Error: ${err.message}`);
        res.status(500).send("Server Error");
    }
}) 
//DELETE to remove ingredient from pantry
app.delete('/pantry/:id', (req, res) => {
    try { 
        const id = parseInt(req.params.id);
        const initialLength = pantry.length;
        pantry = pantry.filter((t) => t.id !== id);
        
        if (pantry.length < initialLength) { 
            res.status(201).send(`Deleted Item id:${id}`)
        } else {
            res.status(404).send("Item not found");
        }
    } catch (err) { 
        console.log(`Error: ${err.message}`);
    }
})

//LISTEN TO MAKE SURE IT IS RUNNING
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})


export default app;