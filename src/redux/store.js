import { createStore ,applyMiddleware} from 'redux';
import  reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas/loadSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const Store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  ));


sagaMiddleware.run(rootSaga)
export default Store;
