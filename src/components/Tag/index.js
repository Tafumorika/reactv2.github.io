import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Tag = (props) => {
    const {tagContent, tagLink} = props;
    return (
        <li className="tag-list-item"><a className="tag-link" href={tagLink}>{tagContent}</a></li>
    )
};

Tag.propTypes = {
    tagContent: PropTypes.string,
    tagLink: PropTypes.string
};
export {Tag}