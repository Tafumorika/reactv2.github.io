import React from 'react';
import './style.css';


const Header = () => {
    return (
        <div className="page-header">
            <header className="page-header">
                <nav className="main-menu">
                    <ul className="head">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export {Header}