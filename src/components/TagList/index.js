import React from 'react';
import './style.css';
import {Tag} from "../Tag";

const myTags = [
    {
        id: 1,
        content:'Facebook'
    },

    {
        id: 2,
        content:'featured'
    },

    {
        id: 3,
        content:'Social media'
    },

    {
        id: 4,
        content:'Tag 1'
    },

    {
        id: 5,
        content:'Tag 2'
    },

    {
        id: 6,
        content:'Tag 3'
    }

];


const TagList = () => {
    return (<div className="tags">
        <h3 className="h3-tag">Tags</h3>
        <ul className="ul-tag">
            {myTags.map((item) => <Tag content={item.content}/>)}
        </ul>
        </div>
    )
}
export {TagList}