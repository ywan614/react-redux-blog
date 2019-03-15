import React from 'react';
import {Layout,Card, Icon,List,Avatar,Input,Button} from 'antd';
import './index.css';
const {
    Content
} = Layout;

const { Meta } = Card;

const IconText = ({ type, text }) => (
    <span >
      <Icon type={type} />
      {text}
    </span>
);

const { TextArea } = Input;

const MainContent = (props)=>{
    return(
        <Layout>
            <Content className = 'content-main'>
                <Card className = "card-postArea" >
                    <Avatar src='https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg'/>
                    <TextArea 
                        className='textArea' 
                        rows={4} 
                        placeholder = 'whats on your mind?'
                        onChange = {props.inOnChange}
                        />
                    <Button className='btn-submit' type="primary" onClick = {props.postBlog}>发布</Button>
                </Card>
                <div className = "content-page">
                    <List className = 'content-list'
                        itemLayout="horizontal"
                        dataSource={props.blogs}
                        renderItem={item =>(
                        <Card
                            bordered = {false}
                            size = {400}
                            actions={[<IconText type="heart" text="喜欢" />, <IconText type="edit" text="评论" />, <IconText type="star" text="收藏" />]}
                        >
                            <Meta
                                avatar = {<Avatar src = {item.avatar}/>}
                                title = {item.name}
                                description = {item.blogs}
                            />
                            <img className = 'img' alt= '' src = {item.img}  height="300px" width="570px" />
                        </Card>
                        )}
                    />
                </div>
            </Content>
            <Card className="card-news" title="推荐群组">
                <List 
                    itemLayout = "vertical"
                    dataSource={props.news}
                    renderItem = {item=>(
                    <Card 
                        href = "./"
                        hoverable
                        style = {{marginTop:"5px"}}
                        bordered = {true}
                        cover = { <img alt= 'img' src={item.img} height="130px" width="300px" />}
                    >      
                        <Meta
                            title={item.title}
                        />
                    </Card>
                    )}
                    
                />
            </Card>
        </Layout>
        
    )
};

export default MainContent;