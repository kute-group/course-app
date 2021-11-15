import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Result, Button } from 'antd';
import 'assets/styles/style.css';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';

const { Header, Content, Footer } = Layout;

// import internal libs

function NotFound() {
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <Result
          status="404"
          title="404"
          subTitle="Hu hu, đường dẫn này không tồn tại."
          extra={
            <Button type="primary">
              <Link to="/">Về trang chủ</Link>
            </Button>
          }
        />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default NotFound;
