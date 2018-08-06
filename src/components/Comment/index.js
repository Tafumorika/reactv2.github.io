import React from 'react';
import './style.css';


// TODO классы переименовать
const Comment = (props) =>{
    const {img, name, text, date}=props;
    return(<div className="comment">
        <img alt="avatar" src={img} className="avatar"/>
        <p className="name-comment"><a href="#link5" className="color-text">{name}</a></p>
        <p className="text-comment">{text}</p>
        <p className="date-comment">{date}<a href="#link6" className="color-text">Reply</a></p>
        </div>
    );

}
export {Comment}