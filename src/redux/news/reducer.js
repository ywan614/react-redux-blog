import {AXIOS_GET_FAIL,AXIOS_GET_SUCC} from '../actionTypes';
const initState = {
    news:[],
    isloaded:false,
    error:null,
}

const newsReducer = (state = initState ,action)=>{
    switch (action.type){
        case AXIOS_GET_SUCC:
            if(action.filter === "news"){
                return Object.assign({},state,{
                    news: action.res.data,
                    isLoaded: true
                })
            }
                
            else{
                return state
            }
                

        case AXIOS_GET_FAIL:
            if(action.filter === "news") {
                return Object.assign({},state,{
                    isLoaded:false,
                    error: action.err
                })
            }  
            else{
                return state
            }
                
        default:return state
    }
    
}

export default newsReducer