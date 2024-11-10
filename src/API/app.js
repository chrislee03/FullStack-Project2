import { MongoClient } from 'mongodb';
import uri from './atlas_uri.js';

const client = new MongoClient(uri);
const dbname = "fullstack";

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
        const database = client.db(dbname);

        const pantryCollection = database.collection("pantry");
        const recipesCollection = database.collection("recipes saved");

        return { pantryCollection, recipesCollection };
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

export { connectToDatabase, client };