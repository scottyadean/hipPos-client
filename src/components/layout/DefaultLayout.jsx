/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ConfigProvider, theme } from 'antd';
import { Layout, Button, Col, Row } from 'antd';

import ItemKeyWordSearch from '../item/ItemKeyWordSearch';
import DefaultIcons from '../ui/DefaultIcons';

export default function DefaultLayout(props) {
  const navigate = useNavigate();
  const { darkAlgorithm } = theme;
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [pathSelected, setPathSelected] = useState("");

  const goToRoute = (path) => {
    setPathSelected(path);
    navigate(path);
  }

  const navBtnStyle = {
    fontSize: '15px',
    width: 50,
    height: 49,
    maxHeight: 49,
    color: "#f6f6f6",
    padding: 0
  };

  const contentStyle = {
    margin: 0,
    padding: "10px",
    height: "95vh",
    backgroundColor: "#15181E",
    borderRadius: "0",
    color: "#f6f6f6"
  };


  const routes = [
    {
      name: "Home",
      path: "/",
      icon: "ShopOutlined"
    },
    {
      name: "Items",
      path: "/items",
      icon: "TagsOutlined"
    },
    {
      name: "Checkout",
      path: "/checkout",
      icon: "ScanOutlined"
    },
    {
      name: "History",
      path: "/history",
      icon: "WalletOutlined"
    },

  ];

  const displayLink = (l, i) => {
    const selected = pathSelected === l.path ? 'selected' : '';
    return (
      <li key={`link-${i}`} className={`mt-10 ${selected} `} >
        <button onClick={() => goToRoute(l.path)} >
          <DefaultIcons type={l.icon} onClick={() => goToRoute(l.path)} /> <span className='menu-txt'>{l.name}</span>
        </button>
      </li>
    );
  }


  return (
    <ConfigProvider theme={{
      algorithm: darkAlgorithm,
    }}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "#202327" }}>

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
              {routes.map((l, i) => displayLink(l, i))}
            </ul>
          </div>

        </Sider>
        <Layout>

          <Header className='header'>
            <Row wrap={false}>
              <Col lg={{ span: 8 }}>
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={navBtnStyle} />
              </Col>

              <Col lg={{ span: 8 }}>
                <ItemKeyWordSearch />
              </Col>

              <Col lg={{ span: 8 }}>  
              </Col>
            </Row>
          </Header>

          <Content style={contentStyle}> {props.children} </Content>

        </Layout>
      </Layout>
    </ConfigProvider>)
}
