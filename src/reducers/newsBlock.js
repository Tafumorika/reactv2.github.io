import {NEWS_BLOCK_LIST_REQUEST_START, NEWS_BLOCK_REQUEST_SUCCESS, NEWS_BLOCK_REQUEST_FAILED} from "../actions/newsBlock";


const intialState = {
    myNewsBlockList: {},
    error: null,
    fetching: false
};
const newsBlocks = (state = intialState, action) => {
    switch (action.type) {
        case NEWS_BLOCK_LIST_REQUEST_START:
            return {
                ...state,
                fetching:true,
                error: ''
            };
        case NEWS_BLOCK_REQUEST_SUCCESS:
            return {
                ...state,
                myNewsBlockList: action.newsPayload,
                fetching: false,
                error: ''
            };
        case NEWS_BLOCK_REQUEST_FAILED:
            return {
                ...state,
                error: action.error,
                fetching: false
            };

        default:
            return state;
    }
};
export default newsBlocks;