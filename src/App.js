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
    axios.get('https://5c84e22463a5850014a821ab.mockapi.io/blogs')
    .then((res)=>{
      console.log(res)
      this.props.getSucc(res)
    })
    .catch((err)=>{
      this.props.getFail(err)
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
      getSucc(res){
        const action = axSucc(res)
        dispatch(action)
      },
      //获取失败
      getFail(err){
        const action = axFail(err)
        dispatch(action)
      },

    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(App);
//export default App;
