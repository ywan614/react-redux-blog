import {GET_BLOG,AXIOS_GET_FAIL,AXIOS_GET_SUCC} from './actionTypes';

export function getBlog(){
    return{
        type: GET_BLOG,
    }
}

export function axSucc(res){
    return{
        type: AXIOS_GET_SUCC,
        res
    }
}

export function axFail(err){
    return{
        type: AXIOS_GET_FAIL,
        err
    }
}