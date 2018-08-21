import {imgList} from "../constants/images";
import {ADDCOMMENT, ADDREPLYID} from '../actions/comments';
import uuid from 'uuid/v1';
// const id = require ('uuid/v1');


const intialState = {
    replyId: null,
    myCommentList: {
        '1': {
            id: '1',
            level: 1,
            img: imgList.comment1,
            name: 'Coen Jacobs',
            text: 'It is a long estabished fact that a reader will be distracted by the readable contebt of a page when looking at its layout.',
            date: 'April 14, 2012 ',
            children: ['2', '4']
        },
        '2': {
            id: '2',
            level: 2,
            img: imgList.comment2,
            name: 'Alex Shiels',
            text: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            date: 'April 14, 2012 ',
            children: ['3']
        },
        '3': {
            id: '3',
            level: 3,
            img: imgList.comment3,
            name: 'Lloyd Budd',
            text: 'This book is a treatise on the theory of ethics, very popular during the Renaissance.',
            date: 'June 27, 2012 ',
            children: []
        },
        '4': {
            id: '4',
            level: 2,
            img: imgList.comment4,
            name: 'Joseph Scott',
            text: 'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat.Quisque metus enim, venenatis fermentum,mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum.',
            date: 'June 27, 2012 ',
            children: []
        },
        '5': {
            id: '5',
            level: 1,
            img: imgList.comment5,
            name: 'Admin',
            text: 'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh.Duis vulputate elit in elit.',
            date: 'June 7, 2012 ',
            children: []
        }
    }

};
const comments = (state = intialState, action) => {
    switch (action.type) {
        case ADDCOMMENT:
            const id = uuid();
            const idData = {
                ...action.data,
                id,
                children: []
            };
            return {
                ...state,
                myCommentList: {
                    ...state.myCommentList,
                    [id]: idData
                }
            };
        case ADDREPLYID:

            return {
                ...state,
                replyId: action.replyId
            };


        default:
            return state;
    }
};
export default comments;
