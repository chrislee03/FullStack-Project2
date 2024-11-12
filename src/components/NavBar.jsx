import '../Routes/App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Collection from '../Routes/CollectionApp.jsx';
import HomeApp from '../Routes/HomeApp.jsx';

const NavBar = () => {
    return ( 
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
    )
}

export default NavBar;