import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

// import internal libs

function CopyRight() {
  return (
    <div className="copy-right">
      <div className="wraper">
        <p className="text-center">Bản quyền thuộc về haha.edu.vn</p>
      </div>
    </div>
  );
}

export default CopyRight;
