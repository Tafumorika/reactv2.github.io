import React from 'react';
import './style.css';

const Link = (props) => {
    const {href} = props;
    return(
        <a href={href} className="color-text">{props.children}</a>
    )
}
export {Link}