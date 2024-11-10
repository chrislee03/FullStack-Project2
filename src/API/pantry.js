import express from 'express';
import cors from 'cors';
import { connectToDatabase, client } from './app.js';

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

// GET All Ingredients in Pantry
app.get('/pantry', async (req, res) => {
    try {
        const { pantryCollection } = await connectToDatabase();
        const pantry = await pantryCollection.find().toArray();
        res.json(pantry);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        res.status(500).send("Server Error");
    }
});

// GET Singular Ingredient Based on ID
app.get('/pantry/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { pantryCollection } = await connectToDatabase();
        const item = await pantryCollection.findOne({ id: id });
        if (item) {
            res.json(item);
        } else {
            res.status(404).send("Item not found");
        }
    } catch (err) {
        console.log(`Error: ${err.message}`);
        res.status(500).send("Server Error");
    }
});

// POST to Add Ingredients to Pantry
app.post('/pantry', async (req, res) => {
    try {
        const newIngredient = {
            id: Date.now(),
            content: req.body.content,
        };
        const { pantryCollection } = await connectToDatabase();
        await pantryCollection.insertOne(newIngredient);
        res.status(201).json(newIngredient);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        res.status(500).send("Server Error");
    }
});

// DELETE to Remove Ingredient from Pantry
app.delete('/pantry/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { pantryCollection } = await connectToDatabase();
        const result = await pantryCollection.deleteOne({ id: id });

        if (result.deletedCount > 0) {
            res.status(200).send(`Deleted Item id: ${id}`);
        } else {
            res.status(404).send("Item not found");
        }
    } catch (err) {
        console.log(`Error: ${err.message}`);
        res.status(500).send("Server Error");
    }
});

// Close MongoDB client when the app is terminated
process.on('SIGINT', async () => {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});