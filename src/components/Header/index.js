import React from 'react';
import './style.css';


const Header = () => {
    return (
        <div className="div-page-header">
            <header className="page-header">
                <nav className="main-menu">
                    <ul className="header-list">
                        <li className="header-list-item"><a className="header-link" href="#home">Home</a></li>
                        <li className="header-list-item"><a className="header-link" href="#news">News</a></li>
                        <li className="header-list-item"><a className="header-link" href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export {Header}