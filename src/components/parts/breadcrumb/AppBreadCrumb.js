import React from 'react';
import { Layout, Menu, Breadcrumb, Row } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import 'components/parts/breadcrumb/AppBreadCrumb.css';
const { Header, Content, Footer } = Layout;

// import internal libs

function AppBreadCrumb() {
  return (
    <div className="app-breadcrumb">
      <div className="wraper">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>Khóa học</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default AppBreadCrumb;
