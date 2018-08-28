import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';

console.log(store.getState());

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));
