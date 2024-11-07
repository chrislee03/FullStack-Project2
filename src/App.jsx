import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import PantryApp from './components/pantry.jsx';
import Recipe from './components/Recipe';



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div id="home">
        <PantryApp/>
        <div id="recipes">
          <Recipe/>
          <Recipe/>
        </div>
      </div>
    </>
  )
}

export default App
