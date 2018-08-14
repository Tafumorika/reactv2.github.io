import React from 'react';
import './style.css';

const Button = (props) => {
    return(
        <button className="button-red" onClick={props.children}>Add Comment</button>
    )
}
export {Button}