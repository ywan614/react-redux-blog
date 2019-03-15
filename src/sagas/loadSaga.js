import { select,put,call,all, takeEvery} from 'redux-saga/effects';
import {ADD_POST,} from '../redux/actionTypes';
import{addPostAsyncSucc} from '../redux/actionCreator';
import axios from 'axios';
import * as selectors from '../redux/selectors';

//watchers
export function* watchAsync() {
  yield takeEvery(ADD_POST,addPostWorker)
}

//worokers""
export function* addPostWorker(){
  try{
    const posting = yield select(selectors.posting)
    //发送请求,上传数据
    yield call(axios.post,"https://5c84e22463a5850014a821ab.mockapi.io/blogs",
     {name:posting.set.name,
      blogs:posting.set.blogs,
      avatar:posting.set.avatar,
     })
    //下载数据,更新列表
    const response = yield call(axios.get,"https://5c84e22463a5850014a821ab.mockapi.io/blogs")
    console.log(response.data)
    yield put(addPostAsyncSucc(response.data))
     
    
  }catch(e){
    console.log(e)
  }
}

export function* rootSaga(){
  yield all([
    watchAsync(),
  ])
}