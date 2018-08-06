import React from 'react';
import './style.css';


const Tag = (props) => {
    const {tagContent, tagLink} = props;
    return (
        <li className="tag-list-item"><a className="tag-link" href={tagLink}>{tagContent}</a></li>
    )
}
export {Tag}