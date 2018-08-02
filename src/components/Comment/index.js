import React from 'react';
import './style.css';

const myComments =[
    {
        id:1,
        img:"/img/Comment1.JPG",
        name:'Coen Jacobs',
        text:'It is a long estabished fact that a reader will be distracted by the readable contebt of a page when looking at its layout.',
        data:'April 14, 2012 '
    },
    {
        id:2,
        img:"/img/answer-comment1.JPG",
        name:'Alex Shiels',
        text:'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        data:'April 14, 2012 '
    },
    {
        id:3,
        img:"/img/an-answer.JPG" ,
        name:'Lloyd Budd',
        text:'This book is a treatise on the theory of ethics, very popular during the Renaissance.',
        data:'June 27, 2012'
    },
    {
        id:4,
        img:"/img/answer2.JPG" ,
        name:'Joseph Scott',
        text:'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat.Quisque metus enim, venenatis fermentum,mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum.',
        data:'June 27, 2012'
    },
    {
        id:5,
        img:"/img/admin.JPG",
        name:'Admin',
        text:'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh.Duis vulputate elit in elit.',
        data:'June 7, 2012 '
    }
];

class Comment extends React.Component{
    render() {
        const newComment = this.props.data.map(function (item) {
        return (
            <div key={item.id}>

                <img alt="avatar" src={item.img} className="avatar"/>
                <p className="name-comment"><a href="#link5" className="color-text">{item.name}</a></p>
                <p className="text-comment">{item.text}</p>

                <p className="data-comment">{item.data}<a href="#link6" className="color-text">Reply</a></p>
            </div>
        )
        })
        return (
            <div>{newComment}</div>
        )
    }
}
export {Comment}