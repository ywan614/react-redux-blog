import {
    GET_BLOG,AXIOS_GET_FAIL,AXIOS_GET_SUCC,IN_CHANGE,ADD_POST,ADD_POST_ASYNC_SUCC,
    ADD_POST_ASYNC_FAIL

} from './actionTypes';

export function getBlog(){
    return{
        type: GET_BLOG,
    }
}
//filter 是为了区分重名的action
export function axSucc(res,filter){
    return{
        type: AXIOS_GET_SUCC,
        res,
        filter
    }
}

export function axFail(err,filter){
    return{
        type: AXIOS_GET_FAIL,
        err,
        filter
    }
}

export function inputOnChange(s){
    return{
        type:IN_CHANGE,
        value:s
    }
}

export function addPost(data){
    return{
        type:ADD_POST,
        value:data,
    }
}

export function addPostAsyncSucc(data){
    return{
        type:ADD_POST_ASYNC_SUCC,
        value:data
    }
}

export function addPostAsyncFail(e){
    return{
        type:ADD_POST_ASYNC_FAIL,
        value:e
    }
}