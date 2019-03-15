import {AXIOS_GET_FAIL,AXIOS_GET_SUCC,ADD_POST_ASYNC_SUCC} from '../actionTypes';

const initState = {
    blogs:[{id:0, blogs:"hello wolrd"}],
    isLoaded: false,
    error:null,
}

const blogsReducer = (state = initState,action)=>{
    switch (action.type){
        case AXIOS_GET_SUCC:
            if(action.filter === "blogs"){
                return Object.assign({},state,{
                    blogs: action.res.data,
                    isLoaded: true
                })
            }
            else{
                return state
            }  

        case AXIOS_GET_FAIL:
            if(action.filter === "blogs"){
                return Object.assign({},state,{
                    isLoaded:false,
                    error: action.err
                })
            }
            else{
                return state
            }          

        case ADD_POST_ASYNC_SUCC:
            return Object.assign({},state,{
                blogs:action.value,
            })

        default: return state
    }
}

export default blogsReducer;