import React from 'react'
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MailOutlined } from '@ant-design/icons';
import {Link , NavLink} from 'react-router-dom'
import Sider from 'antd/es/layout/Sider';

const Sidebar = () => {
  return (
   
    <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      style={{ height: '100%', borderRight: 0}}
    >
      <Menu.Item key="/">
      <ul><li className="nav-item">
          <NavLink className="nav-link" to={'/welcome/'}style={{color:"black"}} ><strong>Home</strong></NavLink>
        </li></ul>
      {/* <Link to="/info">JAVA</Link> */}
        </Menu.Item>
        <Menu.Item key="/createform">
      <ul><li>
      <NavLink className="nav-link" to={'/createform/'}style={{color:"black"}} ><strong>JAVA</strong></NavLink></li></ul>
                      
      </Menu.Item>
      <Menu.Item key="/">
      <ul><li>
      <NavLink className="nav-link" to={'/python/'}style={{color:"black"}} ><strong>PYTHON</strong></NavLink></li></ul>
                      
      </Menu.Item>

      <Menu.Item key="/planlist">
      <ul><li>
      <NavLink className="nav-link" to={'/planlist/'}style={{color:"black"}} ><strong>My Assessment</strong></NavLink></li></ul>
                      
      </Menu.Item>
      


     


    </Menu>
  </Sider>

  )
}

export default Sidebar