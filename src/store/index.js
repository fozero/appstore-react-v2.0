import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './reducers';

/**
 * saga用法
 * 1.创建一个 Saga middleware
 * 2.使用 applyMiddleware 将 middleware 连接至 Store
 * 3.使用 sagaMiddleware.run(helloSaga) 运行 Saga
 */
const sagaMiddleware = createSagaMiddleware();


// 创建store的时候，第二个参数是中间件，redux-thunk提供了一个thunk中间件，用于处理异步的action
let store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// 运行并监控各个action
sagaMiddleware.run(rootSaga);

export default store