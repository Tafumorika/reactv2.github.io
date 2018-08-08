import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Main = (props) => {
    return (
        <div className="main-content">
            <main>
                {props.children}
            </main>
        </div>
    )
};

Main.propTypes ={
    children: PropTypes.node
};

export {Main}