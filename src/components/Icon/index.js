import React from 'react';
import './style.css';

const Icon = (props) => {
    const {iconLink, iconContent} = props;
    return (
        <li className="icons-list-item"><img className="img-icons" alt="Icons-user" src={iconLink}/> {iconContent}</li>
    )
}
export {Icon}