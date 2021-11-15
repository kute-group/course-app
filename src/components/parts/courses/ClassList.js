import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import 'components/parts/courses/ClassList.css';

import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

// import internal libs

function ClassList() {
  return (
    <div className="class-list">
      <div className="wraper">
        <Row gutter={[20]}>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to="/courses">
                  <h3 className="class-text">Lớp</h3>
                  <h2 className="class-number">6</h2>
                </Link>
              </div>
              <nav className="class-links">
                <Link className="class-link" to="/lession/video-100">
                  Môn toán
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn lý
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn hóa
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to="/courses">
                  <h3 className="class-text">Lớp</h3>
                  <h2 className="class-number">6</h2>
                </Link>
              </div>
              <nav className="class-links">
                <Link className="class-link" to="/lession/video-100">
                  Môn toán
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn lý
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn hóa
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to="/courses">
                  <h3 className="class-text">Lớp</h3>
                  <h2 className="class-number">6</h2>
                </Link>
              </div>
              <nav className="class-links">
                <Link className="class-link" to="/lession/video-100">
                  Môn toán
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn lý
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn hóa
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to="/courses">
                  <h3 className="class-text">Lớp</h3>
                  <h2 className="class-number">6</h2>
                </Link>
              </div>
              <nav className="class-links">
                <Link className="class-link" to="/lession/video-100">
                  Môn toán
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn lý
                </Link>
                <Link className="class-link" to="/lession/video-100">
                  Môn hóa
                </Link>
              </nav>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ClassList;
