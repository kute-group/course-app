import React from 'react';
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
} from 'antd';
import { Link } from 'react-router-dom';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import CourseList from 'components/parts/courses/CourseList';
import CourseCategoryList from 'components/parts/courses/CourseCategoryList';
import infoImg from 'assets/images/team.jpg';

import {
  UserAddOutlined,
  ContactsFilled,
  PieChartFilled,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailFilled,
  EditFilled,
  PhoneFilled,
  ArrowRightOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import 'containers/register/Register.css';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

// import internal libs

function Register() {
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <AppBreadCrumb />
        <div className="register">
          <div className="wraper wraper-register">
            <h1 className="title-register">
              Đăng ký <span>Khóa học tốt toán lớp 7</span>
            </h1>
            <Row gutter={[24]}>
              <Col span={3}></Col>
              <Col xl={18} sm={24} xs={24}>
                <div className="tab-info">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Bước 1: Thông tin" key="1">
                      <div className="content-tab">
                        <div className="form-info">
                          <Form
                            className="user-info-form app-form"
                            name="login-form"
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              name="username-parent"
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập tên phụ huynh',
                                },
                              ]}
                            >
                              <Input
                                placeholder="Nhập họ tên phụ huynh"
                                prefix={<UserOutlined />}
                              />
                            </Form.Item>

                            <Form.Item
                              name="number-phone"
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập SĐT phụ huynh',
                                },
                              ]}
                            >
                              <Input
                                placeholder="Nhập số SĐT phụ huynh"
                                prefix={<PhoneFilled />}
                              />
                            </Form.Item>

                            <Form.Item
                              name="gender"
                              label="Chọn hình thức thanh toán"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    'Vui lòng chọn phương thức thanh toán',
                                },
                              ]}
                            >
                              <Select
                                placeholder="Trả học phí tại nhà"
                                allowClear
                              >
                                <Option value="male">
                                  Trả học phí tại nhà
                                </Option>
                                <Option value="female">Chuyển khoản</Option>
                              </Select>
                            </Form.Item>

                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                Tiếp tục <ArrowRightOutlined />
                              </Button>
                            </Form.Item>
                          </Form>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Bước 2: Thanh toán" key="2">
                      <div className="content-tab">
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
                                  message: 'Bạn chưa nhập số điện thoại.',
                                },
                              ]}
                            >
                              <Input
                                placeholder="SĐT"
                                prefix={<MailFilled />}
                              />
                            </Form.Item>

                            <Form.Item
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: 'Bạn chưa nhập mật khẩu',
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
                                placeholder="Mật khẩu"
                              />
                            </Form.Item>

                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                Xác nhận <CheckCircleFilled />
                              </Button>
                            </Form.Item>
                          </Form>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
          </div>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Register;
