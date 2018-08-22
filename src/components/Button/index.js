import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Button = (props) => {
    return(
        <button type={props.type} onClick={props.onClick} className="button-red" >{props.children}</button>
    )
};
Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string

};
export {Button}