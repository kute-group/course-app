import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import 'components/parts/statisic/Statisic.css';

import statisicBg from 'assets/images/bg_statisic.jpg';
const { Header, Content, Footer } = Layout;

// import internal libs

function Statisic() {
  return (
    <div className="statisic" style={{ backgroundImage: `url(${statisicBg})` }}>
      <div className="wraper">
        <Row gutter={[20]}>
          <Col xl={6} sm={12} xs={12} className="statisic-row">
            <div className="statisic-box">
              <h2 className="statisic-number">100.000+</h2>
              <h3 className="statisic-description">Học viên</h3>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={12} className="statisic-row">
            <div className="statisic-box">
              <h2 className="statisic-number">5.000+</h2>
              <h3 className="statisic-description">Bài giảng</h3>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={12} className="statisic-row">
            <div className="statisic-box">
              <h2 className="statisic-number">200.000+</h2>
              <h3 className="statisic-description">Bài ôn tập</h3>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={12} className="statisic-row">
            <div className="statisic-box">
              <h2 className="statisic-number">4.000+</h2>
              <h3 className="statisic-description">Đề luyện thi</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Statisic;
