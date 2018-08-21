import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Link = (props) => {
    const {href, children, onClick} = props;
    return(
        <a href={href} onClick={onClick} className="color-text">{children}</a>
    )
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};
export {Link}