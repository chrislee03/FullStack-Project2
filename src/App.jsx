import { useState, useEffect } from 'react'
import axiosInstance from './API/edamam.js'
import './App.css'
import Navbar from './Navbar'

const fetchRecipe = async (query) => { 
  try { 
    const response = await axiosInstance.get('/', { 
      params: { 
        q: query
      }
    })
    console.log(response.data);
    return response.data;
  } catch (err) { 
    console.log(`Error: ${err.message}`);
  }
}

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
    </>
  )
}

export default App
