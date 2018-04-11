import React from 'react';
import ReactDOM from 'react-dom';
// yarn add react-redux redux redux-logger redux-saga axios react-router-dom
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import App from './container';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
