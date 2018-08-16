import {combineReducers} from 'redux';
import counter from './counter';
import comments from './comments'

export default combineReducers ({
    counter,
    comments
})