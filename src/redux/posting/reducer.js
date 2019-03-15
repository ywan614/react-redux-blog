import {IN_CHANGE,ADD_POST_ASYNC_SUCC} from "../actionTypes";

const initState = {
    set:{
        name:"Blaise Jaskolski",
        blogs:"",
        avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg"
    }
   
}

const postReducer = (state = initState, action)=>{
    switch(action.type){
            //当input变化时
        case IN_CHANGE:
            return Object.assign({},state,{
                    set:{
                        name:"Blaise Jaskolski",
                        blogs:action.value,
                        avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg"
                    }
                    })
        case ADD_POST_ASYNC_SUCC:
            return Object.assign({},state,{
                set:{
                    blogs:""
                }
            })

        default: return state
    }
}

export default postReducer;