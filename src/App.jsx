import { useState, useEffect } from 'react'
import axiosInstance from './API/edamam.js'
import './App.css'

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
    
    </>
  )
}

export default App
