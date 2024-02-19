/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  TagsOutlined,
  ScanOutlined,
  WalletOutlined,
} from '@ant-design/icons';

import { ConfigProvider } from 'antd';
import { Layout, Button, Col, Row } from 'antd';

export default function DefaultLayout(props) {
    
    const navigate = useNavigate();
    const goToRoute = (evt)=>navigate(evt.target.getAttribute('data'));
    
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const themeOverRide = {
        token: {
        // colorPrimary: '#202327',
        // borderRadius: 0,
        // colorBgContainer: '#202327',
        },
    }; 
    
    const navBtnStyle = {
        fontSize: '15px',
        width: 50,
        height: 49,
        maxHeight: 49,
        color: "#f6f6f6",
        padding:0
      };

    const contentStyle = {
        margin: 0,
        padding: "10px",
        height: "95vh",
        backgroundColor: "#15181E",
        borderRadius: "0",
        color: "#f6f6f6"
      };

    return (
    <ConfigProvider theme={themeOverRide}>
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}  style={{backgroundColor: "#202327"}}>
      
    <Row className='logo-left-nav'>
    <Col lg={{ span: 6, offset: 2 }}>
      <div className="logo-vertical" />
    </Col>
    <Col lg={{ span: 6, offset: 2 }}>
      <div className='logo-text'>HipPos</div>
    </Col>
    </Row>

      <div>
        <ul className='menu-left'> 
          <li className='mt-10' data="/" onClick={goToRoute} > <ShopOutlined /> <span className='menu-txt'>Home</span></li>
          <li className='mt-10' data="/items" onClick={goToRoute} ><TagsOutlined /> <span className='menu-txt'>Items</span></li>
          <li data="/" onClick={goToRoute} ><ScanOutlined /> <span className='menu-txt'>Checkout</span></li>
          <li data="/" onClick={goToRoute} ><WalletOutlined /> <span className='menu-txt'>History</span></li>
        </ul>
      </div>
       
    </Sider>
        <Layout>
        <Header style={{ height: 57, padding: 0, backgroundColor: "#15181E", borderBottom: "1px solid #ccc" }}>
            <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={navBtnStyle} />
        </Header>
        
        <Content style={contentStyle}> {props.children} </Content>
    
    </Layout>
  </Layout>
  </ConfigProvider>)
}
