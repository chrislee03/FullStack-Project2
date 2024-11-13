import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from '../components/Nav-Bar.jsx';
import HomeApp from './HomeApp.jsx';
import CollectionApp from './CollectionApp.jsx';
import './App.css';

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <Router> 
            <NavBar/>
            <Routes>
                <Route path="/Home" element={<HomeApp/>}/>
                <Route path='/Collection' element={<CollectionApp/>}/>
            </Routes>
      </Router>
    </>
  )
}


export default App