import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import '@styles/style.scss'

ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
    
)