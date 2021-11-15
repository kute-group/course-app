// import external libs
import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

// import internal libs
import 'components/parts/header/AppHeader.css';
import TopBar from 'components/parts/header/TopBar';
import MainHeader from 'components/parts/header/MainHeader';

const { Header, Content, Footer } = Layout;

function AppHeader() {
  return (
    <header className="app-header">
      <TopBar />
      <MainHeader />
    </header>
  );
}

export default AppHeader;
