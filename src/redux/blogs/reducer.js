import {AXIOS_GET_FAIL,AXIOS_GET_SUCC,IN_CHANGE,ADD_POST} from '../actionTypes';

const initState = {
    blogs:[{id:0, blogs:"hello wolrd"}],
    input:"",
    isLoaded: false,
    error:null,
    id:14,
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
        //当input变化时
        case IN_CHANGE:
            return Object.assign({},state,{
                input:action.value
            })

        case ADD_POST:
            let newID = state.id
            let newSet = {id:newID+1,name:"Blaise Jaskolski",blogs:state.input,avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg"}
            return Object.assign({},state,{
                blogs:[newSet,...state.blogs],
                id:newID+1,
            })

        default: return state
    }
}

export default blogsReducer;