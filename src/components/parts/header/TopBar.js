import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Button,
  Collapse,
  Select,
} from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { PhoneFilled, SettingOutlined } from '@ant-design/icons';
import AuthModal from 'components/modals/AuthModal';
import queryString from 'query-string';

const { Panel } = Collapse;
const { Option } = Select;
const { Header, Content, Footer } = Layout;

// import internal libs

function TopBar(props) {
  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const renderLevels = () => {
    const levels = [
      { title: 'Hot', path: '/hot' },
      { title: 'Nổi bật', path: '/noi-bat' },
      { title: 'Vip', path: '/vip' },
    ];
    const levelLinks = levels.map((level, idx) => {
      const path =
        !location ||
        !location.pathname ||
        location.pathname === '' ||
        location.pathname === '/'
          ? levels[0].path
          : location.pathname;

      return (
        <Link
          key={idx}
          to={level.path}
          className={`top-link ${path === level.path ? 'active' : ''}`}
        >
          <span> {level.title}</span>
        </Link>
      );
    });
    return <nav className="topbar-menu">{levelLinks}</nav>;
  };
  return (
    <div className="top-bar">
      <div className="wraper">
        <Row gutter={[0]}>
          <Col lg={0} md={1} sm={0} xs={0} col={0}></Col>
          <Col xl={6} lg={5} md={9} sm={14} xs={15} col={12}>
            {renderLevels()}
          </Col>
          <Col xl={0} lg={1} md={0} sm={0} xs={0} col={0}></Col>
          <Col xl={6} lg={5} md={0} sm={0} xs={0}>
            <div className="topbar-phone">
              <Button type="link" icon={<PhoneFilled />}>
                033 24 34 165
              </Button>
            </div>
          </Col>
          <Col xl={0} lg={1} sm={0} xs={0} col={0} md={0}></Col>
          <Col xl={6} lg={6} sm={0} xs={0} md={6}>
            <div className="topbar-course">
              <h3>
                <Link to="/user" className="top-link">
                  Khóa học của tôi
                </Link>
              </h3>
            </div>
          </Col>
          <Col xl={0} lg={1} md={3} sm={3} xs={1} col={0}></Col>
          <Col xl={4} lg={5} md={5} sm={5} xs={7} col={12}>
            <AuthModal />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopBar;
