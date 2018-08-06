import React from 'react';
import './style.css';
import {Tag} from "../Tag";

const myTags = [
    {
        id: 1,
        tagContent:'Facebook',
        tagLink: '#link1'
    },

    {
        id: 2,
        tagContent:'featured',
        tagLink: '#link2'
    },

    {
        id: 3,
        tagContent:'Social media',
        tagLink: '#link3'
    },

    {
        id: 4,
        tagContent:'Tag 1',
        tagLink: '#link4'
    },

    {
        id: 5,
        tagContent:'Tag 2',
        tagLink: '#link5'
    },

    {
        id: 6,
        tagContent:'Tag 3',
        tagLink: '#link6'
    }

];


const TagList = () => {
    return (<div className="column tags">
        <h3 className="h3-tag">Tags</h3>
        <ul className="ul-tag">
            {myTags.map((item) => <Tag tagContent={item.tagContent} tagLink={item.tagLink}/>)}
        </ul>
        </div>
    )
}
export {TagList}