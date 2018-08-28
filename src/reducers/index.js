import {combineReducers} from 'redux';
import counter from './counter';
import comments from './comments'
import newsBlocks from './newsBlock'

export default combineReducers ({
    counter,
    comments,
    newsBlocks
})