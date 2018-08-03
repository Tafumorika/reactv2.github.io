import React from 'react';
import './style.css';


const Header = () => {
    return (
        <div className="div-page-header">
            <header className="page-header">
                <nav className="main-menu">
                    <ul className="ul-header">
                        <li className="li-header"><a className="a-header" href="#home">Home</a></li>
                        <li className="li-header"><a className="a-header" href="#news">News</a></li>
                        <li className="li-header"><a className="a-header" href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export {Header}