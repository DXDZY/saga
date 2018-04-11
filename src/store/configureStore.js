import { createStore,applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import appReducer from './../redux/reducer';
import rootSaga from './../redux/sagas';
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({collapsed: true});
const middlewares = [sagaMiddleware,loggerMiddleware];
const store = createStore(appReducer,composeWithDevTools(
    applyMiddleware(...middlewares)
));
sagaMiddleware.run(rootSaga);

export default store;

// 组件加入dev-tool
// import { createStore,applyMiddleware,compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import appReducer from './../redux/reducer';
// import rootSaga from './../redux/sagas';

// import DevTools from 'container/DevTools';
// const sagaMiddleware = createSagaMiddleware();

// const finalCreateStore = compose(
//     applyMiddleware(sagaMiddleware),
//     DevTools.instrument(),
// )(createStore);

// const store = finalCreateStore(appReducer);
// sagaMiddleware.run(rootSaga);
// export default store;

//不加devtool
// import { createStore,applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import appReducer from './../redux/reducer';
// import rootSaga from './../redux/sagas';

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware,logger];
// const store = createStore(appReducer,applyMiddleware(...middlewares));
// sagaMiddleware.run(rootSaga);

//区分开发正式
// export default store;
// if (process.env.NODE_ENV === 'production') {
//     module.exports = require('./configureStore.prod');
//   } else {
//     module.exports = require('./configureStore.dev');
//   }
  