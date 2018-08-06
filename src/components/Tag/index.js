import React from 'react';
import './style.css';


const Tag = (props) => {
    const {tagContent, tagLink} = props;
    return (
        <li className="li-tag"><a className="a-tag" href={tagLink}>{tagContent}</a></li>
    )
}
export {Tag}