import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from 'reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(saga);

export default store;
