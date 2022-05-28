
import React, { useEffect, useState, Component } from 'react'
import { 
    Layout, Menu, Breadcrumb , Input, Radio , Divider, Table,
    Popover, Button,  Descriptions, Calendar, Badge,  Avatar,
    Card, Col, Row , PageHeader, Dropdown, message, Pagination} from 'antd';

import {
  DesktopOutlined, SearchOutlined,SwapRightOutlined,PlusOutlined,
  PieChartOutlined,FileOutlined,DeleteOutlined,EditOutlined,MenuFoldOutlined,
  TeamOutlined, UserOutlined, MenuUnfoldOutlined, MessageOutlined,
  DownOutlined, DashboardOutlined, CopyOutlined, DownloadOutlined,
  DashboardFilled, UsergroupAddOutlined, VideoCameraOutlined, UploadOutlined
} from '@ant-design/icons';

import siderLogo  from "../Images/e-destinacces-logo.png";
import siderImg from "../Images/sidebar-1.jpg";
import '../Styles/css/country.css';
import { count } from 'console';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const text = <span>Title</span>;
const content = (
<div>
  <p>Content</p>
  <p>Content</p>
</div>
);

function onShowSizeChange() {
  console.log();
}

// interface Country {
//   countries: string[];
// }

const countries = ["nepal", "usa", "mexico"];



// searchHandleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
//   var searchValue:string = event.target.value;
//   console.log(searchValue);
//   setState({
//     searchValue: event.target.value 
//   })
// }



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};



function Country() {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    var typedValue = event.target.value;
    console.log(typedValue);
  }

  // // constructor(props: any) {
  // //   super(props);
  // //   }

  // // handleSearch = () => {
  // //   console.log()
  // // }



    return (
      <div className="App">

      <div>
      <Header className="site-layout-background" style={{ padding: 0, backgroundColor: "#142c61", color: "#fff", position: "fixed", width: "100%", zIndex: "999", top: 0, minHeight: "60px"}} >
            <div style={{ float: "right"}}>
            <Row>
        <Col className="customNavHeader"  style={{ padding: "0 2rem" }}>
        <Button>Chat</Button>
        <Button>Chat</Button>
        
        <Popover style={{width: 80, height: 80, border: "none" }}placement="bottom" title={text} content={content} trigger="click">
              <img src={siderImg} alt="profile-logo" style={{ height: "50px", maxWidth: "100%", width: "50px", borderRadius: "50%"}}/>
        </Popover>
        </Col>
        </Row>
            </div>
      </Header>
      </div>

      <br />

      <Layout className="whiteBg" style={{ marginTop: "2rem"}}>
        <Sider>
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined  />}>
              My Dashboard
            </Menu.Item>

            <SubMenu key="sub2" icon={<DashboardOutlined  />} title="Sales & Operations">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<DashboardOutlined />} title="Reference Data">
              <Menu.Item key="3"> User Management </Menu.Item>
              <Menu.Item key="4"> Company Profile </Menu.Item>
              <Menu.Item key="5"> DMCs </Menu.Item>
              <Menu.Item key="5"> Global Data </Menu.Item>
                <SubMenu key="sub3" title="Region">
                   <Menu.Item key="7">Country</Menu.Item>
                   <Menu.Item key="8">State</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub2" icon={<DashboardOutlined  />} title="Financial">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<DashboardOutlined  />} title="CRM">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          {/*  Starts Main COntent from Here */}
          <Content style={{ margin: '16px' }}>
         
          <Row>
          <Col span={24}>

          <Card title="" style={{ margin: '16px 0' }} bordered={false} >
              <Row>

              <Col span={5}>
              <Input placeholder="Search Keyword" onChange = {handleChange}/>
              </Col>

             <Col style={{margin: "0 14px"}}>
             <Button type="primary" icon={<SearchOutlined /> }>
                  Search
            </Button>
            </Col>

            </Row>
            </Card>

            </Col>
           </Row>

           <div style = {{ minHeight: ""}}>

           <Row>

               <Col span={24}>
                    <Card title="" bordered={false}>
                        
                        <Col>
                        {/* CRUD OPTIONS HERE CREATE DELETE EDIT AND UPDATE BUTTON COLLECTIONS STARTS*/}
                        <Button type="primary" icon={<PlusOutlined /> } style={{ margin: '4px '}}>
                            Create
                        </Button>
                   
                        <Button type="primary" icon={<EditOutlined />} style={{ margin: '4px '}}>
                            Edit
                        </Button>
                    
                        <Button danger icon={<DeleteOutlined />} style={{ margin: '4px '}}>
                            Delete
                        </Button>
                 
                        <Button type="primary" icon={<UploadOutlined />} style={{ margin: '4px '}}>
                            Update
                        </Button>
                        </Col>
                        <br />
                        {/* ENDS CRUD OPTIONS HERE CREATE DELETE EDIT AND UPDATE BUTTON COLLECTIONS */}


                        {/* MAIN CONTENT TABLE STARTS  */}
                        <Table style={{overflow: 'auto'}}
                        rowSelection={{
                            ...rowSelection,
                         }}
                         columns={columns}
                         dataSource={data}
                        />

          
                       {/* Pagination Starts */}
                      <Col>
                        <Pagination
                         showSizeChanger
                         onShowSizeChange={onShowSizeChange}
                         defaultCurrent={3}
                         total={500}
                        />
                       </Col>
                      {/* Pagination Ends */}

                    </Card>
                 </Col>

            </Row>
            </div>

          </Content>
          {/* Ends Content Here */}

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

        </Layout>
      </Layout>
      </div>
    );
  }


export default Country;