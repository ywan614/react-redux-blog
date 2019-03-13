import {} from "../actionTypes";

const initState = {
    set:{
        id:13,
        name:"Blaise Jaskolski",
        blogs:"",
        avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg"
    }
   
}

const postReducer = (state = initState, action)=>{
    switch(action.type){

        default: return state
    }
}

export default postReducer;