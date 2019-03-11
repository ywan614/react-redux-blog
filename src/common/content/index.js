import React from 'react';
import {Layout,Carousel,Card, Icon,List,Avatar} from 'antd';
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

const MainContent = (props)=>{
    return(
        <Layout>
            <Content className = 'content-main'>
                <Carousel effect="fade">
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <div className = "content-page">
                    <List className = 'content-list'
                        itemLayout="horizontal"
                        dataSource={props.blogs}
                        renderItem={item =>(
                        <Card
                            bordered = {false}
                            actions={[<IconText type="heart" text="喜欢" />, <IconText type="edit" text="评论" />, <IconText type="star" text="收藏" />]}
                        >
                            <Meta
                                avatar = {<Avatar src = {item.avatar}/>}
                                title = {item.name}
                                description = {item.blogs}
                            />
                        </Card>
                        )}
                    />
                </div>
                <Card
                    className = "card-manpage"
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
                <Card className="card-options" >
                    <a href="./">我的收藏</a> <br/>
                    <a href="./">我的关注</a> <br/> 
                    <a href="./">服务中心</a> <br/>
                    <a href="./">版本</a>
                </Card>
            </Content>
            <Content className = 'content-options'>
                
            </Content>
        </Layout>
        
    )
};

export default MainContent;