import React from 'react';
import './style.css';


const Main = (props) => {
    return (
        <div className="main-content">
            <main>
                {props.children}
            </main>
        </div>
    )
}
export {Main}