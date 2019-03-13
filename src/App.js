import React, { Component } from 'react';
//import {GlobalStyle} from "./style";
import MainUI from './common/MainUI';
import {connect} from 'react-redux';
import axios from 'axios';
import {axSucc,axFail} from './redux/actionCreator';


class App extends Component {
  
  render() {
    return (
      <MainUI 
      
      />
      
    );
  }

  componentDidMount(){
    //获取异步数据
    axios.get('https://5c84e22463a5850014a821ab.mockapi.io/blogs')
    .then((res)=>{
      this.props.getSucc(res,"blogs")
    })
    .catch((err)=>{
      this.props.getFail(err,"blogs")
    })

    axios.get('https://5c84e22463a5850014a821ab.mockapi.io/news')
    .then((res)=>{
      this.props.getSucc(res,"news")
    })
    .catch((err)=>{
      this.props.getFail(err,"news")
    })
    
  }

}



const mapStatetoProps = (state) =>{
  return {    
    blogs: state.blogs,
  }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      //获取成功
      getSucc(res,filter){
        const action = axSucc(res,filter)
        dispatch(action)
      },
      //获取失败
      getFail(err,filter){
        const action = axFail(err,filter)
        dispatch(action)
      },

    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(App);
//export default App;
