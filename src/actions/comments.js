import {wait} from "../helpers/functions";

export const ADD_COMMENT = 'COMMENT/ADD/FORM/ADDFORM';
export const ADD_REPLYID = 'COMMENT/ADD/REPLY/ID';
export const COMMENT_LIST_REQUEST_START = 'COMMENT/COMMENT_LIST_REQUEST_START';
export const REQUEST_SUCCESS = 'COMMENT/REQUEST_SUCCESS';
export const REQUEST_FAILED = 'COMMENT/REQUEST_FAILED';



export function addComment(data, parentId) {
    return {type: ADD_COMMENT, data, parentId};
}

export function addReplyId(replyId) {
    return {type: ADD_REPLYID, replyId};
}
export function commentListRequestStart() {
    return {type: COMMENT_LIST_REQUEST_START};
}
export function commentListRequestSuccess(payload) {
    return {type: REQUEST_SUCCESS, payload};
}

export function commentListRequestFailed(error) {
    return {type: REQUEST_FAILED, error};
}

export function loadCommentList() {
    return (dispatch) => {
        dispatch(commentListRequestStart());
        fetch('/commentList.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return wait(2000).then(() => data);
            })
            .then((commentList) => {
                dispatch(commentListRequestSuccess(commentList));
            })
            .catch( function (error) {
                console.log("Error" + error.message);
                dispatch(commentListRequestFailed(error))
            })
    }
}