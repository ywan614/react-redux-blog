import { combineReducers } from 'redux';
import blogReducer from './blogs/reducer';
import newsReducer from './news/reducer';
import postReducer from './posting/reducer';



const reducer = combineReducers({
    blog:blogReducer,
    news:newsReducer,
    posting:postReducer
})

export default reducer;
