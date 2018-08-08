import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Link = (props) => {
    const {href, children} = props;
    return(
        <a href={href} className="color-text">{children}</a>
    )
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
};
export {Link}