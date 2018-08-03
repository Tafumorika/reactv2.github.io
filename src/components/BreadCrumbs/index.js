import React from 'react';
import './style.css';

// TODO ссылки принимать из props
const BreadCrumbs = () => {
    return(
        <div className="breadCrumbs">
            <p className="top1"><a href="#link1" className="color-text">Home</a>»<a href="#link2" className="color-text1">featured</a>» A Post with Everything in it</p>
        </div>
    )
}
export {BreadCrumbs}