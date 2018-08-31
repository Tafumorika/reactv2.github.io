import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


const LinkNews = () => {
    const id = 1;
    return (
            <Link className="link-news" to={'/news/' + id}>Read More</Link>
    )
};

export {LinkNews}