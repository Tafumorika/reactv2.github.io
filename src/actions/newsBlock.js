import {wait} from "../helpers/functions";

export const NEWS_BLOCK_LIST_REQUEST_START = 'NEW_BLOCK/COMMENT_LIST_REQUEST_START';
export const NEWS_BLOCK_REQUEST_SUCCESS = 'NEW_BLOCK/REQUEST_SUCCESS';
export const NEWS_BLOCK_REQUEST_FAILED = 'NEW_BLOCK/REQUEST_FAILED';


export function newsBockListRequestStart() {
    return {type: NEWS_BLOCK_LIST_REQUEST_START};
}
export function newsBockListRequestSuccess(newsPayload) {
    return {type: NEWS_BLOCK_REQUEST_SUCCESS, newsPayload};
}

export function newsBockListRequestFailed(error) {
    return {type: NEWS_BLOCK_REQUEST_FAILED, error};
}

export function loadNewsBlockList(page) {
    return (dispatch) => {
        dispatch(newsBockListRequestStart());
        fetch('/newsBlockList' + page + '.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return wait(1000).then(() => data);
            })
            .then((newBlockList) => {
                dispatch(newsBockListRequestSuccess(newBlockList));
            })
            .catch( function (error) {
                console.log("Error" + error.message);
                dispatch(newsBockListRequestFailed(error))
            })
    }
}