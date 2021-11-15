import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'assets/styles/style.css';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';

const { Header, Content, Footer } = Layout;

// import internal libs

function About() {
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        222
        <BigSlider />
        11
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default About;
