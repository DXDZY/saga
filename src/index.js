import React from 'react';
import ReactDOM from 'react-dom';
// yarn add react-redux redux redux-logger redux-saga axios react-router-dom
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import appReducer from './redux/reducer';
import rootSaga from './redux/sagas';

import App from './container';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,logger];
const store = createStore(appReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
