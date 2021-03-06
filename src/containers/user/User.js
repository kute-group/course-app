import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Row,
  Col,
  Tabs,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Radio,
  notification,
} from 'antd';
import { Link } from 'react-router-dom';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import CourseList from 'components/parts/courses/CourseList';
import CourseCategoryList from 'components/parts/courses/CourseCategoryList';
import infoImg from 'assets/images/team.jpg';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  UserAddOutlined,
  ContactsFilled,
  PieChartFilled,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailFilled,
  EditFilled,
  KeyOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import 'containers/user/User.css';
import { doEditUser } from 'redux/users/action';
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;
// import internal libs
const { Option } = Select;
const day = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
const year = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
];

function User() {
  const userInfo = localStorage.getItem('userInfo');
  const user = JSON.parse(userInfo);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [value, setValue] = React.useState(1);
  useEffect(() => {
    return () => {
      const token = localStorage.getItem('userToken');
      if (token) {
        history.push('/');
      }
    };
  }, []);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangePassword = (values) => {
    console.log(3333, values);
    const callback = (result) => {
      if (result.success) {
        notification.success({
          message: 'L???y m???t kh???u th??nh c??ng',
        });
      } else {
        notification.success({
          message: 'L???y m???t kh???u th???t b???i',
        });
      }
    };

    dispatch(
      doEditUser({ password: values.password, _id: user._id }, callback)
    );
  };

  const onUpdate = (values) => {
    console.log(3333, values);
    const callback = (result) => {
      if (result.success) {
        notification.success({
          message: 'C???p nh???t th??nh c??ng th??nh c??ng',
        });
      } else {
        notification.success({
          message: 'C???p nh???t th???t b???i',
        });
      }
    };

    dispatch(doEditUser({ ...values, _id: user._id }, callback));
  };

  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <AppBreadCrumb />
        <div className="user-box">
          <div className="wraper wraper-user-account">
            <Row gutter={[20]}>
              <Col xl={6} sm={24} xs={24} className="news-left">
                <div className="info-user">
                  <div className="wraper-user-bg">
                    <div className="firt-info">
                      <div className="info-img">
                        <img src={infoImg} alt="" />
                      </div>
                      <p className="info-name">{user.username}</p>
                    </div>
                    <div className="list-info">
                      <ul>
                        <li>
                          <Link to="/#">
                            <UserAddOutlined /> Th??ng tin c?? nh??n
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <ContactsFilled /> Kh??a h???c c???a t??i
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <PieChartFilled /> Qu?? tr??nh h???c t???p
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={18} sm={24} xs={24} className="news-right">
                <div className="tab-info">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Th??ng tin c?? nh??n" key="1">
                      <div className="content-tab">
                        <div className="content-tab-title">
                          <p>Th??ng tin c?? nh??n</p>
                        </div>
                        <div className="form-info">
                          <Form
                            className="user-info-form app-form"
                            name="update-form"
                            initialValues={{ remember: true }}
                            onFinish={onUpdate}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                          >
                            <div className="form-group">
                              <label>T??n ????ng nh???p</label>
                              <div className="input-group">
                                <Form.Item
                                  name="usernamelogin"
                                  className="form-group-item"
                                >
                                  <Input
                                    prefix={<KeyOutlined />}
                                    defaultValue={user.email}
                                    disabled
                                  />
                                </Form.Item>
                              </div>
                            </div>

                            <div className="form-group">
                              <label>H??? v?? T??n</label>
                              <div className="input-group">
                                <Form.Item
                                  name="username"
                                  className="form-group-item"
                                >
                                  <Input
                                    defaultValue={user.username}
                                    prefix={<UserOutlined />}
                                  />
                                </Form.Item>
                              </div>
                            </div>

                            <div className="form-group">
                              <label>S??? ??i???n Tho???i</label>
                              <div className="input-group">
                                <Form.Item name="sdt">
                                  <Input
                                    defaultValue={user.phone}
                                    prefix={<PhoneOutlined />}
                                  />
                                </Form.Item>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Ng??y Sinh</label>
                              <div className="select-date">
                                <Row gutter={[20]}>
                                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                    <Select
                                      defaultValue={'Ng??y ' + day[0]}
                                      className="input-select"
                                      name="birthday"
                                    >
                                      <Option> Ch???n ng??y</Option>
                                      {day.map((day) => (
                                        <Option key={day}>Ng??y {day}</Option>
                                      ))}
                                    </Select>
                                  </Col>
                                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                    <Select
                                      defaultValue="Th??ng 1"
                                      className="input-select"
                                    >
                                      <Option value="jack">Ch???n Th??ng</Option>
                                      <Option value="1">Th??ng 1</Option>
                                      <Option value="2">Th??ng 2</Option>
                                      <Option value="3"> Th??ng 3</Option>
                                      <Option value="4">Th??ng 4</Option>
                                      <Option value="5">Th??ng 5</Option>
                                      <Option value="6"> Th??ng 6</Option>
                                      <Option value="7"> Th??ng 7</Option>
                                      <Option value="8"> Th??ng 8</Option>
                                      <Option value="9"> Th??ng 9</Option>
                                      <Option value="10"> Th??ng 10</Option>
                                      <Option value="11"> Th??ng 11</Option>
                                      <Option value="12"> Th??ng 12</Option>
                                    </Select>
                                  </Col>
                                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                    <Select
                                      defaultValue={'N??m ' + year[0]}
                                      className="input-select"
                                    >
                                      <Option> Ch???n n??m</Option>
                                      {year.map((year) => (
                                        <Option key={year}>N??m {year}</Option>
                                      ))}
                                    </Select>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                            <div className="form-group sex">
                              <label>Gi???i t??nh</label>
                              <div className="radio-galy">
                                <Radio.Group onChange={onChange} value={value}>
                                  <Radio value={1}>Nam</Radio>
                                  <Radio value={2}>N???</Radio>
                                </Radio.Group>
                              </div>
                            </div>

                            <div className="form-group">
                              <label>Email</label>
                              <div className="input-group">
                                <Form.Item
                                  name="email"
                                  className="form-group-item"
                                >
                                  <Input
                                    defaultValue={user.email}
                                    prefix={<MailFilled />}
                                  />
                                </Form.Item>
                              </div>
                            </div>

                            <div className="form-group">
                              <label>?????a ch???</label>
                              <div className="input-group">
                                <Form.Item
                                  name="address"
                                  className="form-group-item"
                                >
                                  <TextArea
                                    defaultValue={user.address}
                                    rows={4}
                                  />
                                </Form.Item>
                              </div>
                            </div>

                            <div className="form-group-btn">
                              <Form.Item className="form-group-item">
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  size="large"
                                >
                                  C???p nh???t
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="?????i m???t kh???u" key="2">
                      <div className="content-tab">
                        <div className="content-tab-title">
                          <p>?????i m???t kh???u</p>
                        </div>
                        <div className="form-info">
                          <Form
                            className="user-info-form app-form"
                            name="change-password-form"
                            onFinish={onChangePassword}
                            // onFinishFailed={onFinishFailed}
                          >
                            <div className="form-group">
                              <label>M???t kh???u m???i</label>
                              <div className="input-group">
                                <Form.Item
                                  name="password"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'B???n ch??a nh???p m???t kh???u m???i.',
                                    },
                                  ]}
                                >
                                  <Input
                                    placeholder="Nh???p m???t kh???u m???i"
                                    prefix={<KeyOutlined />}
                                    type="password"
                                  />
                                </Form.Item>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Nh???p l???i </label>
                              <div className="input-group">
                                <Form.Item
                                  name="confirm-pass"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'B???n ch??a nh???p l???i m???t kh???u m.',
                                    },
                                  ]}
                                >
                                  <Input
                                    placeholder="Nh???p l???i m???t kh???u"
                                    prefix={<KeyOutlined />}
                                    type="password"
                                  />
                                </Form.Item>
                              </div>
                            </div>

                            <div className="form-group-btn">
                              <Form.Item>
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  size="large"
                                >
                                  C???p nh???t
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Th??ng tin ph??? huynh" key="3">
                      <div className="content-tab">
                        <div className="content-tab-title">
                          <p>Th??ng tin ph??? huynh</p>
                        </div>
                        <div className="form-info">
                          <Form
                            className="user-info-form app-form"
                            name="login-form"
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              name="username"
                              rules={[
                                {
                                  required: true,
                                  message: 'B???n ch??a nh???p s??? ??i???n tho???i.',
                                },
                              ]}
                            >
                              <Input
                                placeholder="S??T"
                                prefix={<MailFilled />}
                              />
                            </Form.Item>

                            <Form.Item
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: 'B???n ch??a nh???p m???t kh???u',
                                },
                              ]}
                            >
                              <Input.Password
                                prefix={<EditFilled />}
                                iconRender={(visible) =>
                                  visible ? (
                                    <EyeTwoTone />
                                  ) : (
                                    <EyeInvisibleOutlined />
                                  )
                                }
                                placeholder="M???t kh???u"
                              />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                              <Checkbox>Nh??? m???t kh???u</Checkbox>
                            </Form.Item>

                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                ????ng nh???p
                              </Button>
                            </Form.Item>
                          </Form>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default User;
