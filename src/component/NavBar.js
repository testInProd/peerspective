import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    console.log(props);

    return (
        <nav className="Nav">
            <Link
                className="NavBar" to="/">Home
            </Link>
            <Link
                className="NavBar" to="/questions">Questions
            </Link>
            <Link
                className="NavBar" to="/responses">Responses
            </Link>
            <Link
                className="NavBar" to="/search">search
            </Link>
        </nav>
    )
}

export default NavBar;