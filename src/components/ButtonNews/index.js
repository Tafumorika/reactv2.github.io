import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


const ButtonNews = () => {
    const id = 1;
    return (
        <button className="button-new">
            <Link to={'/news/' + id}>Read More</Link>
        </button>
    )
};

export {ButtonNews}