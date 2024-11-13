import {Link} from 'react-router-dom';
import './Nav-Bar.css';

const NavBar =() => {
    return ( 
        <nav className="nav-bar">
            <div className="nav-title"> Pantry Pal </div>
            <ul className="navBarButtons">
                <li > <Link to='/Home' className="nav-button"> Home </Link></li>
                <li > <Link to='/Collection' className="nav-button"> Collection </Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;