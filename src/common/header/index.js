import React from 'react';
import "./index.css"
import {Layout, Menu} from 'antd';
const {
    Header
} = Layout;

const TopHeader = ()=>{
    return (
        <Header  style={{ position: 'fixed', zIndex: 1, width: '100%',borderBottom:'2px solid #BFBEBE' }}>
            <a className = "logo" href = "./"><span/></a>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px',paddingLeft:'96px' }}
            >
                <Menu.Item key="1" style = {{marginLeft:'30px'}}>推荐</Menu.Item>
                <Menu.Item key="2">发现</Menu.Item>
                <Menu.Item key="3">话题</Menu.Item>
            </Menu>
        </Header>
        ) 
};


export default TopHeader;