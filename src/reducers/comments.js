import {ADD_COMMENT, ADD_REPLYID, COMMENT_LIST_REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILED} from '../actions/comments';
import uuid from 'uuid/v1';

// const id = require ('uuid/v1');


const intialState = {
    replyId: null,
    myCommentList: {},
    error: null,
    fetching: false
};
const comments = (state = intialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const id = uuid();
            const parent = state.myCommentList[action.parentId];
            const idData = {
                ...action.data,
                id,
                level: parent ? parent.level + 1 : 1,
                children: []
            };

            if (parent) {

                return {
                    ...state,
                    myCommentList: {
                        ...state.myCommentList,
                        [id]: idData,
                        [action.parentId]: {
                            ...parent,
                            children: [...parent.children, id]
                        }
                    }
                };
            }

            return {
                ...state,
                myCommentList: {
                    ...state.myCommentList,
                    [id]: idData
                }
            };

        case ADD_REPLYID:

            return {
                ...state,
                replyId: action.replyId
            };
        case COMMENT_LIST_REQUEST_START:
            return {
                ...state,
                fetching:true,
                error: ''
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                myCommentList: action.payload,
                fetching: false,
                error: ''
            };
        case REQUEST_FAILED:
            return {
                ...state,
                error: action.error,
                fetching: false
            };

        default:
            return state;
    }
};
export default comments;
