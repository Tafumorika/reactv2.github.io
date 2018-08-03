import React from 'react';
import './style.css';


const Tag = (props) => {
    const {content} = props;
    return (
        <li className="li-tag"><a className="a-tag" href="#link13">{content}</a></li>
    )
}
export {Tag}