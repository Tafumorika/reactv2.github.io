import React from 'react';
import './style.css';
import {TagList} from '../TagList';

const Footer = () => {
    return(
        <footer className="page-footer">
            <nav className="nav-footer">
                <div className="column column1">
                    <h3>Recent Comments</h3>
                    <ul className="column1-list">
                        <li className="column1-list-item">Joseph Scott on About</li>
                        <li className="column1-list-item">Alex Shiels on About</li>
                        <li className="column1-list-item">Coen Jacobs on About</li>
                    </ul>
                </div>

                <TagList/>

                <div className="column column3">
                    <h3>Text Widget</h3>
                    <p className="column3-text">Interger ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Pellentesque egestas, neque sit amet
                        convallis pulvinar, justo nulla eleifed augue, ac auctor orci leo non est.In ac felis quis tortor malesuada pretium.
                    </p>
                </div>
                <div className="column copyright">
                    <p>Copyright © 2018</p>
                </div>
                <div className="clear-div"/>
            </nav>
        </footer>
    )
}
export {Footer}