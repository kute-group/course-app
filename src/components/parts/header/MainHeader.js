// import external libs
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Collapse,
  Select,
  Input,
  List,
  Typography,
  Divider,
} from 'antd';
import logo from 'assets/images/logo.png';
import hat from 'assets/images/hat.png';
import { PhoneFilled, MailOutlined, SearchOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
// import internal libs
const styles = {
  width: 175,
  borderradius: 20,
  position: 'absolute',
  left: 0,
};

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];
const { Panel } = Collapse;
const { Option } = Select;
const { SubMenu } = Menu;

function MainHeader() {
  function callback(key) {}
  const [expandIconPosition, setExpandIconPosition] = useState('right');
  const handleClick = (e) => {};
  const menu = (
    <Menu style={styles}>
      <SubMenu title="Tiền lớp 1">
        <Menu.Item>Toán học</Menu.Item>
        <Menu.Item>Tiếng việt</Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="Lớp 1">
        <Menu.Item>Toán học</Menu.Item>
        <Menu.Item>Tiếng việt</Menu.Item>
        <Menu.Item>Tiếng Anh</Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="Lớp 2">
        <Menu.Item>Toán học</Menu.Item>
        <Menu.Item>Tiếng việt</Menu.Item>
        <Menu.Item>Tiếng Anh</Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="Lớp 3">
        <Menu.Item>Toán học</Menu.Item>
        <Menu.Item>Tiếng việt</Menu.Item>
        <Menu.Item>Tiếng Anh</Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="Lớp 4">
        <Menu.Item>Toán học</Menu.Item>
        <Menu.Item>Tiếng việt</Menu.Item>
        <Menu.Item>Tiếng Anh</Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="Lớp 5">
        <Menu.Item>Toán học</Menu.Item>
        <Menu.Item>Tiếng việt</Menu.Item>
        <Menu.Item>Tiếng Anh</Menu.Item>
      </SubMenu>
    </Menu>
  );

  const onPositionChange = (expandIconPosition) => {
    setExpandIconPosition({ expandIconPosition });
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="main-header">
      <div className="wraper">
        <Row gutter={[0]}>
          <Col lg={0} xl={0} md={1} sm={1}></Col>
          <Col lg={0} md={8} sm={8} xs={5}>
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  onClick={showSidebar}
                ></i>
              </Link>
            </div>
          </Col>
          <Col xl={0} lg={0} md={0} sm={0} xs={4}></Col>
          <Col xl={5} lg={4} md={15} sm={15} xs={5}>
            <Link to="/" className="logo">
              <img src={logo} className="app-logo" />
            </Link>
          </Col>
          <Col xl={5} lg={3} md={0} sm={0} xs={0}></Col>
          <Col xl={13} lg={16} md={0} sm={0} xs={0}>
            <div className="main-menu">
              <ul>
                <li className="submenu">
                  <div className="classroom">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <h3>
                        <Link to="/courses">Lớp học</Link>
                      </h3>
                    </Dropdown>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                </li>
                <li>
                  <div className="studyspace menu-link">
                    <i className="fa fa-leanpub" aria-hidden="true"></i>
                    <h3>
                      <Link to="/posts">Góc học tập</Link>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="contact">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <h3>
                      <Link to="/contact">Liên hệ</Link>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <div className="menucolapse1">
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <Collapse
                defaultActiveKey={['2']}
                expandIconPosition={expandIconPosition}
                className="menu-collapsed-input"
              >
                <Panel
                  icon={<i className="ant-menu-submenu-arrow"></i>}
                  header={
                    <div className="menu-collapse-divi-panel">
                      <i
                        className="fa fa-graduation-cap"
                        aria-hidden="true"
                      ></i>
                      <h3>Lớp học</h3>
                    </div>
                  }
                  key="1"
                >
                  <Menu
                    onClick={handleClick}
                    style={{ width: '100%' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    className="css-submenu-mobile"
                  >
                    <SubMenu key="sub1" title={<h3>Tiền lớp 1</h3>}>
                      <Menu.Item key="1">
                        <Link to="/courses">
                          <h3>Toán học</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/courses">
                          <h3>Tiếng việt</h3>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<h3>Lớp 1</h3>}>
                      <Menu.Item key="1">
                        <Link to="/courses">
                          <h3>Toán học</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/courses">
                          <h3>Tiếng việt</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Link to="/courses">
                          <h3>Tiếng Anh</h3>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<h3>Lớp 2</h3>}>
                      <Menu.Item key="1">
                        <Link to="/courses">
                          <h3>Toán học</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="#">
                          <h3>Tiếng việt</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Link to="/courses">
                          <h3>Tiếng Anh</h3>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<h3>Lớp 3</h3>}>
                      <Menu.Item key="1">
                        <Link to="/courses">
                          <h3>Toán học</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/courses">
                          <h3>Tiếng việt</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Link to="/courses">
                          <h3>Tiếng Anh</h3>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<h3>Lớp 4</h3>}>
                      <Menu.Item key="1">
                        <Link to="/courses">
                          <h3>Toán học</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/courses">
                          <h3>Tiếng việt</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Link to="/courses">
                          <h3>Tiếng Anh</h3>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<h3>Lớp 5</h3>}>
                      <Menu.Item key="1">
                        <Link to="/courses">
                          <h3>Toán học</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/courses">
                          <h3>Tiếng việt</h3>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Link to="/courses">
                          <h3>Tiếng Anh</h3>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Panel>
              </Collapse>
              <div className="menu-collapse-divi">
                <ul>
                  <li className="menu-collapse-divi">
                    <div className="menu-collapse-divi-left">
                      <i className="fa fa-leanpub" aria-hidden="true"></i>
                      <h3>
                        <Link to="/posts">Góc học tập</Link>
                      </h3>
                    </div>
                  </li>

                  <li className="menu-collapse-divi">
                    <div className="menu-collapse-divi-left">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <p>
                        <Link to="/contact">Liên hệ</Link>
                      </p>
                    </div>
                  </li>
                  <li className="menu-collapse-divi">
                    <input
                      type="text"
                      className="divi-input"
                      placeholder="Tìm kiếm gì đó ........"
                    />
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </li>
                  <li className="menu-collapse-divi">
                    <Button type="text" className="menu-collapse-divi-btn">
                      Hotline:012345678
                    </Button>
                  </li>
                </ul>
              </div>

              {/* <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>
                    <i className="fa fa-search" aria-hidden="true"></i>
                      </Typography.Text> {item}
                  </List.Item>
                )}
              /> */}
            </nav>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default MainHeader;
