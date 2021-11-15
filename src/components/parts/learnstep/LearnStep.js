import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import 'components/parts/learnstep/LearnStep.css';
import newsImg from 'assets/images/news.jpg';

import {
  SearchOutlined,
  ContactsFilled,
  UserAddOutlined,
  CarryOutFilled,
} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

// import internal libs

function LearnStep() {
  return (
    <div className="learn-step">
      <div className="wraper wraper-learn-step">
        <h3 className="learn-step-title">
          Tham gia haha.edu.vn dễ dàng chỉ với 4 bước
        </h3>
        <Row gutter={[20]}>
          <Col xl={6} sm={24} xs={24} className="step-row">
            <div className="step-box-1">
              <div className="step-title-1">
                <h4 className="step">Bước 1</h4>
              </div>
              <div className="content-step content-step-1">
                <ul>
                  <li>
                    <p>
                      <SearchOutlined />
                      Chọn khóa học
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={24} xs={24} className="step-row">
            <div className="step-box-2">
              <div className="step-title-2">
                <h4 className="step">Bước 2</h4>
              </div>
              <div className="content-step content-step-2">
                <ul>
                  <li>
                    <p>
                      <ContactsFilled /> Học thử miễn phí
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={24} xs={24} className="step-row">
            <div className="step-box-3">
              <div className="step-title-3">
                <h4 className="step">Bước 3</h4>
              </div>
              <div className="content-step content-step-3">
                <ul>
                  <li>
                    <p>
                      <CarryOutFilled /> Nộp học phí
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={24} xs={24} className="step-row">
            <div className="step-box-4">
              <div className="step-title-4">
                <h4 className="step">Bước 4</h4>
              </div>
              <div className="content-step content-step-4">
                <ul>
                  <li>
                    <p>
                      <UserAddOutlined /> Vào học
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LearnStep;
