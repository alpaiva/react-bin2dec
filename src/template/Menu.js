import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = props => {
    return (<aside className='nav'>

        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/converter">
                        Converter
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>)
}

export default Menu;