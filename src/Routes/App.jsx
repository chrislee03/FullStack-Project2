import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Collection from './CollectionApp.jsx';
import HomeApp from './HomeApp.jsx';


function App() {

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <Router>
        <nav> 
          <div> My Pantry </div> 
          <ul className="navBarButtons">
            <li> <Link to="/Home"> Home </Link> </li>
            <li> <Link to="/Collection"> Collection </Link> </li> 
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<HomeApp/>}/>
          <Route path='/Collection' element={<Collection/>}/>
        </Routes>
      </Router>
    </>
  )
}


export default App