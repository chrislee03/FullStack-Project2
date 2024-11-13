import './App.css';
import PantryApp from '../components/Pantry.jsx';
import RecipeApp from '../components/Recipe.jsx';

const HomeApp =() => {
    return ( 
        <>
        <div id="home">
        <div id="pantryAppContainer">
          <PantryApp/>
        </div>
        <div id="recipeAppContainer">
          <RecipeApp/>
        </div>
      </div>
       </>
    )
}

export default HomeApp;