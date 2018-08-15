import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Button = (props) => {
    return(
        <button className="button-red">{props.children}</button>
    )
};
Button.propTypes = {
    children: PropTypes.string
};
export {Button}