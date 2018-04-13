import { createStore,applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import appReducer from './../redux/reducer';
import rootSaga from './../redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({collapsed: true});
const middlewares = [sagaMiddleware,loggerMiddleware];
const store = createStore(appReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;