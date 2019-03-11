import {AXIOS_GET_FAIL,AXIOS_GET_SUCC} from '../actionTypes';

const initState = {
    blogs:[{id:0, blogs:"hello wolrd"}],
    isLoaded: false,
    error:null
}

const blogsReducer = (state = initState,action)=>{
    switch (action.type){
        case AXIOS_GET_SUCC:
            return Object.assign({},state,{
                blogs: action.res.data,
                isLoaded: true
            })

        case AXIOS_GET_FAIL:
            return Object.assign({},state,{
                isLoaded:false,
                error: action.err
            })

        default: return state
    }
}

export default blogsReducer;