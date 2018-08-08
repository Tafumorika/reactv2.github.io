import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Icon = (props) => {
    const {iconLink, iconContent} = props;
    return (
        <li className="icons-list-item"><img className="img-icons" alt="Icons-user" src={iconLink}/> {iconContent}</li>
    )
};

Icon.propTypes = {
    iconLink: PropTypes.string,
    iconContent: PropTypes.string
};
export {Icon}