import React ,{Fragment}from "react";
import TopHeader from "./header/index";
import MainContent from "./content/index";
import {connect} from 'react-redux';
import {Layout} from "antd";
import {inputOnChange,addPost} from "../redux/actionCreator";

const MainUI = (props)=>{
    return(
        <Fragment>
            <Layout>
                <TopHeader/>
                <MainContent
                 blogs = {props.blogs}
                 news = {props.news}
                 inOnChange = {props.inOnChange}
                 postBlog = {props.postBlog}
                 input={props.input}
                />
            </Layout>
        </Fragment>
    );
}

const mapStatetoProps = (state) =>{
    return {
      blogs: state.blog.blogs,
      news:state.news.news,
      input:state.posting.blogs,
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        //输入框改变时
        inOnChange(e){
            const action = inputOnChange(e.target.value)
            dispatch(action)
        },
        //发布新微博
        postBlog(){
            const action = addPost()
            dispatch(action)
        }
    }
}
  
export default connect(mapStatetoProps,mapDispatchToProps)(MainUI);