import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className="div-page-header">
            <header className="page-header">
                <nav className="main-menu">
                    <ul className="header-list">
                        <li className="header-list-item"><Link className="header-link" to='/'>Home</Link></li>
                        <li className="header-list-item"><Link className="header-link" to='/news'>News</Link></li>
                        <li className="header-list-item"><Link className="header-link" to='/about'>About</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export {Header}