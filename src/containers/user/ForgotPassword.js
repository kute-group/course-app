import { LockOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  Layout,
  notification,
  Result,
  Row,
} from 'antd';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import AppFooter from 'components/parts/footer/AppFooter';
import AppHeader from 'components/parts/header/AppHeader';
// import internal libs
import { cryptoUnHash } from 'helpers/common';
import queryString from 'query-string';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { doEditUser } from 'redux/users/action';

const { Content } = Layout;
function ForgotForm(props) {
  const [form] = Form.useForm();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [state, setState] = useState({ confirmDirty: false, submit: false });
  const user = useSelector((state) => state.user);
  const config = useSelector((state) => state.config);
  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Nhập mật khẩu mới');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && state.confirmDirty) {
      form.validateFields(['confirm-pass'], { force: true });
    }
    callback();
  };

  const onChangePassword = (values) => {
    const callback = (result) => {
      if (result.success) {
        notification.success({
          message: 'Lấy mật khẩu thành công',
        });
        history.push('/');
      } else {
        notification.success({
          message: 'Lấy mật khẩu thất bại',
        });
      }
    };
    const urlQuery = queryString.parse(location.search);
    dispatch(
      doEditUser({ password: values.password, _id: urlQuery.userId }, callback)
    );
  };

  const renderChangePasswordForm = () => {
    return (
      <Form className="login-form" form={form} onFinish={onChangePassword}>
        <p className="alert">Lấy lại mật khẩu</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Bạn chưa nhập mật khẩu',
            },
            { min: 6, message: 'mật khẩu tối thiểu 6 ký tự' },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>
        <Form.Item
          name="confirm-pass"
          rules={[
            {
              required: true,
              message: 'Nhập lại mật khẩu',
            },
            // {
            //   validator: compareToFirstPassword,
            // },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            // onBlur={handleConfirmBlur}
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const renderRequestSuccess = () => {
    return (
      <div className="login-form">
        <Result
          status="success"
          extra={[
            <Link to="/">
              <Button>Đăng nhập</Button>
            </Link>,
          ]}
          title={'Bạn vui lòng kiểm tra e-mail'}
          subTitle={
            'Một thư chứa đường dẫn khôi phục mật khẩu đã được gửi cho địa chỉ email tài khoản của bạn. Đường dẫn sẽ hết hạn sau 3 ngày'
          }
        />
      </div>
    );
  };

  const renderRequestFail = () => {
    return (
      <div className="login-form">
        <Result
          status="warning"
          extra={[
            <Link to="/auth/forgot-password">
              <Button>Quay lại</Button>
            </Link>,
          ]}
          title="Gửi e-mail lấy lại mật khẩu thất bại"
          subTitle="Đã có lỗi xảy ra trong quá trình gửi mail để lấy lại mật khẩu. Bạn vui lòng kiểm tra lại e-mail, liên hệ với quản trị viên để xử lý"
        />
      </div>
    );
  };

  const renderRequestExpire = () => {
    return (
      <div className="login-form">
        <Result
          status="warning"
          extra={[
            <Link to="/auth/forgot-password">
              <Button>gửi lại</Button>
            </Link>,
          ]}
          title="Link đã hết hạn"
          subTitle="Link lấy lại mật khẩu đã hết hạn, bạn vui lòng gửi lại email."
        />
      </div>
    );
  };

  const renderForgotPassword = () => {
    const urlQuery = queryString.parse(location.search);
    if (urlQuery.submit && urlQuery.submit === 'success') {
      return renderRequestSuccess();
    } else if (urlQuery.submit && urlQuery.submit === 'error')
      return renderRequestFail();
    else if (urlQuery.userId && urlQuery.keyCode) {
      const currentTime = new Date().getTime();
      const expireDate = cryptoUnHash(urlQuery.keyCode);

      if (currentTime < Number(expireDate)) return renderChangePasswordForm();
      else return renderRequestExpire();
    }
  };
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <AppBreadCrumb />
        <div className="wraper">
          <Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              {renderForgotPassword()}
            </Col>
          </Row>
        </div>
      </Content>

      <AppFooter />
    </Layout>
  );
}

export default ForgotForm;
