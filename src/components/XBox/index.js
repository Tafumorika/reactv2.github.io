import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const XBox = (props) => {
    return (
        <div className="main-content">
            <main>
                {props.children}
            </main>
        </div>
    )
};

XBox.propTypes ={
    children: PropTypes.node
};

export {XBox}