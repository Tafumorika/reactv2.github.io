import React from 'react';
import './style.css';

// TODO: props.children
const Button = (props) => {
    return(
        <button className="button-red" onClick={props.onClick}>Add Comment</button>
    )
}
export {Button}