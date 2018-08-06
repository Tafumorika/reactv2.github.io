import React from 'react';
import './style.css';
import {Link} from "../Link";


// TODO классы переименовать
const Comment = (props) =>{
    const {img, name, text, date}=props;
    return(<div className="comment">
        <img alt="avatar" src={img} className="comment-avatar"/>
        <p className="comment-style name-comment"><Link href="#link5">{name}</Link></p>
        <p className="comment-style text-comment">{text}</p>
        <p className="comment-style date-comment">{date}<Link href="#link6">Reply</Link></p>
        </div>
    );

}
export {Comment}