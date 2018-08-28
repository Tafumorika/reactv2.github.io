import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers';
import thunk from 'redux-thunk'

const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
});
const middleware = applyMiddleware(thunk, logger);
const store =  createStore(
    reducers,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension(): f => f)
);
export default store;