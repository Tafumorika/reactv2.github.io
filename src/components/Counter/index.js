import React from 'react';
import './style.css'

export const Counter = (props) => (
    <div>
        <span className="count">{props.count}</span>
        <br/>
        <button className="btn" onClick={props.increment}>Increment</button>
        <button className="btn" onClick={props.decrement}>Decrement</button>
    </div>
);