import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Link} from 'react-router-dom';


const ButtonNews = (props) => {
    const {link, active} = props;
    let className = 'button-news';

    if (active) {
        className += ' active';
    }

    return (
        <Link className={className} to={'/news?page=' + link}>{props.children}</Link>
    )
};
ButtonNews.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool
};
export {ButtonNews}