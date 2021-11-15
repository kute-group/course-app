import React from 'react';
import { Layout, Menu, Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import CourseList from 'components/parts/courses/CourseList';
import CourseCategoryList from 'components/parts/courses/CourseCategoryList';
import mapContact from 'assets/images/map.png';

import {
  StarFilled,
  PhoneFilled,
  CustomerServiceFilled,
  MailFilled,
  EyeTwoTone,
  EyeInvisibleOutlined,
  EditFilled,
  UserOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import 'containers/contact/Contact.css';

const { Header, Content, Footer } = Layout;

// import internal libs

function Contact() {
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <AppBreadCrumb />
        <div className="user-box user-contact-page">
          <div className="wraper wraper-contact-bg">
            <div className="top-contact-page">
              <Row gutter={[20]}>
                <Col xl={12} sm={24} xs={24} className="news-left">
                  <div className="title-contact-page">
                    <h1>Thông tin liên hệ</h1>
                  </div>
                  <div className="infor-contact-page">
                    <ul>
                      <li>
                        <div className="icon-contact-page">
                          <StarFilled />
                        </div>
                        <div className="content-icon-contact-page">
                          <h4>Công ty cổ phần giáo dục và công nghệ</h4>
                          <p>62, Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-contact-page">
                          <CustomerServiceFilled />
                        </div>
                        <div className="content-icon-contact-page">
                          <h4>Tổng đài hỗ trợ</h4>
                          <h4>
                            <Link to="/#">0934 344 434</Link>
                          </h4>
                          <p>
                            8:00 - 17:30 từ thứ hai đến thứ sáu và các ngày thứ
                            bảy của tuần lẻ
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-contact-page">
                          <PhoneFilled />
                        </div>
                        <div className="content-icon-contact-page">
                          <h4>Điện thoại văn phòng</h4>
                          <h4>
                            <Link to="/#">0934 344 434</Link>
                          </h4>
                          <p>8:00 - 17:30 tất cả các ngày trong tuần</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-contact-page">
                          <MailFilled />
                        </div>
                        <div className="content-icon-contact-page">
                          <h4>Email</h4>
                          <p>
                            Hỗ trợ sử dụng: <span>hotro@hocvui.vn</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xl={12} sm={24} xs={24} className="news-right">
                  <div className="title-contact-page">
                    <h1>Vị trí trên bản đồ</h1>
                  </div>
                  <div className="map-contact-page">
                    <img src={mapContact} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="bottom-contact-page">
              <Row gutter={[20]}>
                <Col xl={8} sm={24} xs={24} className="news-left">
                  <div className="title-contact-page">
                    <h1>Phản hồi, góp ý</h1>
                    <p>
                      Bạn có thể dùng form liên hệ bên cạnh để gửi ý kiến trực
                      tiếp tới vui học. Chúng tôi sẽ phản hồi trong thời gian
                      sớm nhất !
                    </p>
                  </div>
                </Col>
                <Col xl={16} sm={24} xs={24} className="news-right">
                  <Form
                    className="contact-form app-form"
                    name="contact-form"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="fullname"
                      rules={[
                        {
                          required: true,
                          message: 'Họ và tên không được để trống',
                        },
                      ]}
                    >
                      <Input placeholder="Họ tên*" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Email không được để trống',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Địa chỉ Email*"
                        prefix={<MailFilled />}
                      />
                    </Form.Item>

                    <Form.Item
                      name="numberphone"
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Số điện thoại"
                        prefix={<PhoneFilled />}
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: 'Nội dung thông điệp không được để trống',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Gửi thông điệp của bạn"
                        prefix={<EditFilled />}
                      />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Tôi không phải người máy</Checkbox>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="button-submit"
                      >
                        <CheckOutlined />
                        Gửi đi
                      </Button>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="button-canced"
                      >
                        <CloseOutlined />
                        Hủy bỏ
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Contact;
