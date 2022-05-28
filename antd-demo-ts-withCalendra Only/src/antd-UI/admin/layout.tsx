import React, { Component } from 'react'
import {  Descriptions, Popover, Layout, Menu, Calendar, Badge,  Card, Col, Row , PageHeader, Button,  Dropdown, message } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, DownOutlined, DashboardOutlined, CopyOutlined, DashboardFilled, UsergroupAddOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import { Footer } from "antd/lib/layout/layout";
import '../css/admin/custom.css';
import '../css/admin/responsiveness.css';
import siderImg  from "../images/sidebar-1.jpg";
import siderLogo  from "../images/e-destinacces-logo.png";
import Select from 'react-select'



export default function AdminLayout () {

  const { Header, Sider, Content } = Layout;

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  
  const text = <span>Title</span>;
  const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
  );

  let title = "DIY Dashboard";
  let companyMail = "info@e-destinaccess.com";
  let companyName = " e-destinACCESS ";
  
  
    return (
      <Layout>
        <Sider>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['1']}  className="customSider" style={{ backgroundImage: `url(${siderImg})` }}>
          <div style={{ marginBottom: "1px solid #fff"}}>
            <img src={siderLogo} alt="compantsider-logo" className= "logo" />
            </div>

            <Menu.Item key="1" icon={<DashboardFilled />}>
              Dashboad
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              Start New Group
            </Menu.Item>
            <Menu.Item key="3" icon={<CopyOutlined />}>
              My Reports
            </Menu.Item>
            <Menu.Item key="4" icon={<CopyOutlined />}>
              My Activities
            </Menu.Item>
            <Menu.Item key="5" icon={<CopyOutlined />}>
              My Suppliers
            </Menu.Item>
            <Menu.Item key="6" icon={<CopyOutlined />}>
              User Management
            </Menu.Item>
            <Menu.Item key="7" icon={<CopyOutlined />}>
              Additional Fields
            </Menu.Item>

          </Menu>
        </Sider>

<Layout className="site-layout">

<Header className="header" style={{padding: "0 20px", margin: 0}}>
<PageHeader
      ghost={false}
      title= {title}
      subTitle=""
      extra={[

        <div className='col-12' style={{}}>
        <Select  placeholder="USD" options={options} />
         </div>,


        <div style={{}}>
        <Select placeholder="Select Language"  className="basic-single" options={options} />
         </div>,

         <div  className="space-align">
          <Popover style={{width: 75, height: 80, border: "none" }}placement="bottom" title={text} content={content} trigger="click">
           <Button shape="circle" style={{width: 55, height: 60, border: "none"}}>
           <img src={siderImg} alt="user-profileIcon" style={{width: "100%", height: "100%", maxWidth: "100%", borderRadius: "50%"}}/>
           </Button>
          </Popover>
          </div>

      ]}
    >
    </PageHeader>

   </Header>

          <Content
            className=""
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: "100vh",
            }}
          >

          {/* This IS calendar Section */}
          <div> 
            <h1 style={{textAlign: "center"}}> Calendar Section </h1>
          <Calendar />
          </div>
            

            <div style={{padding: 0}}>
            <h1 style={{textAlign: "center"}}> Dashboard Section </h1>
              <Row>
                <Col style={{ border: "1px solid red"}}  span={12}>COL6</Col>
                <Col style={{ border: "1px solid red"}} span={12}>COL6</Col>
              </Row>
            </div>
          

          </Content>

          <Footer>
          Copyright © 2011-{new Date().getFullYear()}  {companyName}, Inc. US 12/319,111. <br />
          All Rights Reserved {companyMail} 
          </Footer>
        </Layout>
      </Layout>
    );
}

