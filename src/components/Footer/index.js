import React from 'react';
import './style.css';
import {TagList} from '../TagList';

const Footer = () => {
    return(
        <footer className="page-footer">
            <nav className="nav-footer">
                <div className="recent">
                    <h3 className="rec">Recent Comments</h3>
                    <ul className="ul-recent">
                        <li className="li-recent">Joseph Scott on About</li>
                        <li className="li-recent">Alex Shiels on About</li>
                        <li className="li-recent">Coen Jacobs on About</li>
                    </ul>
                </div>


                <TagList/>

                <div className=" textW">
                    <h3 className="text-h3">Text Widget</h3>
                    <p className="textWp">Interger ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Pellentesque egestas, neque sit amet
                        convallis pulvinar, justo nulla eleifed augue, ac auctor orci leo non est.In ac felis quis tortor malesuada pretium.
                    </p>
                </div>
                <div className="copyright">
                    <p>Copyright © 2018</p>
                </div>
                <div className="clear-div"/>
            </nav>
        </footer>
    )
}
export {Footer}