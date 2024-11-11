import './App.css';
import Navbar from './components/Navbar';
import PantryApp from './components/pantry.jsx';
import RecipeApp from './components/Recipe.jsx'
import SavedRecipes from './components/savedRecipes.jsx';




function App() {

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
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