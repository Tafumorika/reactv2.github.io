import React from 'react';
import './style.css';
import {Icon} from '../Icon';

const myIcon =[
    {
        id:1,
        iconLink:"/img/icons8-user-account-filled-50.png",
        iconContent:'By MyThemeShop'
    },
    {
        id:2,
        iconLink:"/img/icons8-filled-bookmark-ribbon-32.png",
        iconContent:'featured, Mobiles'
    },
    {
        id:3,
        iconLink:"/img/icons8-speech-bubble-filled-50.png",
        iconContent:'5 Comments'
    }
    ];

const IconList = () => {
    return(
        <div className="icons">
            <ul className="icons-list">
                {myIcon.map((item) => <Icon iconLink={item.iconLink} iconContent={item.iconContent}/> )}
            </ul>
        </div>
    )
}
export {IconList}