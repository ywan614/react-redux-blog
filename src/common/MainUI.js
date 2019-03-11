import React ,{Fragment}from "react";
import TopHeader from "./header/index";
import MainContent from "./content/index";
import {connect} from 'react-redux';
import {Layout} from "antd";

const MainUI = (props)=>{
    return(
        <Fragment>
            <Layout>
                <TopHeader/>
                <MainContent
                 blogs = {props.blogs}
                />
            </Layout>
        </Fragment>
    );
}

const mapStatetoProps = (state) =>{
    return {    
      blogs: state.blogs,
      isloaded:state.isloaded
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}
  
export default connect(mapStatetoProps,mapDispatchToProps)(MainUI);