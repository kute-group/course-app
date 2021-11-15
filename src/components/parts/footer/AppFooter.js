// import external libs
import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

// import internal libs
import 'components/parts/footer/AppFooter.css';
import MainFooter from 'components/parts/footer/MainFooter';
import CopyRight from 'components/parts/footer/CopyRight';

function AppFooter() {
  return (
    <footer className="app-footer">
      <MainFooter />
      <CopyRight />
    </footer>
  );
}

export default AppFooter;
