import React from 'react';
import './style.css';
import {Comment} from '../Comment';

const myComments =[
    {
        id:1,
        level:1,
        img:"/img/Comment1.JPG",
        name:'Coen Jacobs',
        text:'It is a long estabished fact that a reader will be distracted by the readable contebt of a page when looking at its layout.',
        date:'April 14, 2012 '
    },
    {
        id:2,
        level:2,
        img:"/img/answer-comment1.JPG",
        name:'Alex Shiels',
        text:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        date:'April 14, 2012 '
    },
    {
        id:3,
        level:3,
        img:"/img/an-answer.JPG" ,
        name:'Lloyd Budd',
        text:'This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        date:'June 27, 2012 '
    },
    {
        id:4,
        level:2,
        img:"/img/answer2.JPG" ,
        name:'Joseph Scott',
        text:'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat.Quisque metus enim, venenatis fermentum,mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum.',
        date:'June 27, 2012 '
    },
    {
        id:5,
        level: 1,
        img:"/img/admin.JPG",
        name:'Admin',
        text:'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh.Duis vulputate elit in elit.',
        date:'June 7, 2012 '
    }
];

// TODO переименовать классы
const CommentList = () => {
    const commentsList = myComments.map(function (item, index) {
        return (
            <div className={'comment-level-' + item.level}>
                {index ===0 ? '':<hr />}
                <Comment img={item.img} name={item.name} text={item.text} date={item.date}/>
            </div>
        )
    });

     return (
         <nav className="commentsList">
             {commentsList}
         </nav>
     )
 }

 export {CommentList}