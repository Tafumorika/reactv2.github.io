import React from 'react';
import './style.css';
import {TagList} from '../TagList';

const Footer = () => {
    return(
        <footer className="page-footer">
            <nav className="footer">
                <div className="recent">
                    <h3 className="rec">Recent Comments</h3>
                    <ul>
                        <li>Joseph Scott on About</li>
                        <li>Alex Shiels on About</li>
                        <li>Coen Jacobs on About</li>
                    </ul>
                </div>


                <TagList/>

                {/*<div className="tags">*/}
                    {/*<h3 className="tagsH">Tags</h3>*/}
                    {/*<ul className="tags4">*/}
                        {/*<li><a href="#link13">Facebook</a></li>*/}
                        {/*<li><a href="#link14">featured</a></li>*/}
                        {/*<li><a href="#link15">Social media</a></li>*/}
                        {/*<li className="tags-li"><a href="#link16">Tag 1</a></li>*/}
                        {/*<li className="tags-li"><a href="#link17">Tag 2</a></li>*/}
                        {/*<li className="tags-li"><a href="#link18">Tag 3</a></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
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