import './App.css';
import Navbar from './components/Navbar';
import PantryApp from './components/pantry.jsx';
import RecipeApp from './components/Recipe.jsx'
import SavedRecipes from './components/savedRecipes.jsx';




function App() {

  return (
    <>
      <Navbar></Navbar>
      <div id="home">
        <div id="pantryAppContainer">
          <PantryApp/>
        </div>
        <div id="recipeAppContainer">
          <RecipeApp/>
        </div>
      </div>
      <SavedRecipes/>
    </>
  )
}

export default App