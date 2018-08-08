import React from 'react';
import './style.css';

// TODO дату принимать из props
const BoxRed = (props) => {
    return (
        <div className="box-red">
            <span className="box-red-text">{props.children}</span>
        </div>
    )
}
export {BoxRed}