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
        <PantryApp/>
        <div id="recipes">
          <RecipeApp/>
          <SavedRecipes/>
        </div>
      </div>
    </>
  )
}

export default App