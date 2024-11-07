import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PantryApp from './components/pantry.jsx';
import RecipeApp from './components/Recipe';



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div id="home">
        <div id="pantry">

        </div>
        <div id="recipes">

        </div>
      </div>
      <PantryApp/>
      <RecipeApp/>
    </>
  )
}

export default App
