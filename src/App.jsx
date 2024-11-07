import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import PantryApp from './components/pantry.jsx';
import Recipe from './components/RecipeCard.jsx';



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div id="home">
        <PantryApp/>
        <div id="recipes">
        </div>
      </div>
    </>
  )
}

export default App