import {GET_BLOG,AXIOS_GET_FAIL,AXIOS_GET_SUCC,IN_CHANGE,ADD_POST} from './actionTypes';

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

export function addPost(){
    return{
        type:ADD_POST,
    }
}