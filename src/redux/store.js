import { createStore ,applyMiddleware} from 'redux';
import  reducer from './blogs/reducer';
import createSagaMiddleware from 'redux-saga';
import {loadSaga} from '../sagas/loadSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const Store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  ));
    
sagaMiddleware.run(loadSaga)
export default Store;
