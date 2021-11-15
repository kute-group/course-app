// import external libs
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import {
  Layout,
  Modal,
  Breadcrumb,
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  notification,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailFilled,
  EditFilled,
  PhoneFilled,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

// import internal libs
import 'components/modals/AuthModal.css';
import { APP_URL } from 'configs';
import {
  doLogin,
  doLogout,
  doRegister,
  doForgotPassword,
} from 'redux/users/action';
import avatar from 'assets/images/avatar.png';
import avatarUser from 'assets/images/userAvatar.png';
import SocialLogin from 'components/commons/SocialLogin';
import bellImg from 'assets/images/notibell.png';

function LoginModal() {
  const [form] = Form.useForm();
  const history = useHistory();
  const [visiable, setVisible] = useState(false);
  const [type, setType] = useState('login');

  const userToken = localStorage.getItem('userToken');
  const userInfo = localStorage.getItem('userInfo');

  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onSubmitLogin = (values) => {
    const callback = (response) => {
      if (response.success) {
        setVisible(false);
        history.push('/');
      } else {
        notification.success({
          message: 'Đăng nhập thất bại!',
        });
      }
    };
    dispatch(doLogin({ info: values, callback }));
  };

  const onSubmitForgotPassword = (values) => {
    const callback = (result) => {
      if (result.success) {
        history.push('/auth/forgot-password?submit=success');
      } else {
        history.push('/auth/forgot-password?submit=error');
      }
    };
    dispatch(
      doForgotPassword({ email: values.email, site: APP_URL }, callback)
    );
    setType('forgot_password_sucsses');
  };

  const onSubmitRegister = (values) => {
    const callback = (response) => {
      if (response.success) {
        setVisible(false);
        history.push('/');
        notification.success({
          message: 'Đăng ký thành công!',
        });
      } else {
        notification.success({
          message: 'Đăng ký thất bại',
        });
      }
    };
    dispatch(
      doRegister(
        {
          ...values,
          isVerified: true,
          status: 'active',
          type: 'register',
        },
        callback
      )
    );
    setType('register_sucsses');
  };

  const onLogout = () => {
    const callback = (response) => {
      if (response.success) {
        setVisible(false);
        history.push('/');
      } else {
        notification.success({
          message: 'Đăng xuất thất bại!',
        });
      }
    };
    dispatch(doLogout({ callback }));
  };

  const renderLogin = () => {
    return (
      <Form
        form={form}
        className="login-form app-form"
        name="login-form"
        onFinish={onSubmitLogin}
      >
        <h2 className="form-title">Đăng nhập</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập SĐT hoặc Email' }]}
        >
          <Input placeholder="SĐT/Email/Username" prefix={<MailFilled />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Bạn chưa nhập mật khẩu!' }]}
        >
          <Input.Password
            prefix={<EditFilled />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Nhớ mật khẩu</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <SocialLogin setVisible={(isVisible) => setVisible(isVisible)} />
        </Form.Item>
        <div className="footer-login">
          <div className="forgot-password">
            Bạn quên mật khẩu ư?{' '}
            <a
              onClick={() => {
                setType('forgot_password');
              }}
            >
              Lấy lại mật khẩu
            </a>
          </div>
          <div className="forgot-password">
            Bạn chưa có tài khoản?{' '}
            <a
              onClick={() => {
                setType('register');
              }}
            >
              Đăng ký
            </a>{' '}
            gấp
          </div>
        </div>
      </Form>
    );
  };

  const renderRegister = () => {
    return (
      <Form
        className="register-form app-form"
        name="login-form"
        form={form}
        onFinish={onSubmitRegister}
      >
        <h2 className="form-title">Đăng ký</h2>
        <Form.Item
          name="fullname"
          rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
        >
          <Input placeholder="Họ tên*" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'SĐT không được để trống' }]}
        >
          <Input placeholder="SĐT*" prefix={<PhoneFilled />} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Email không được để trống' }]}
        >
          <Input placeholder="EMAIL*" prefix={<MailFilled />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Mật khẩu dài tối thiểu 6 ký tự' },
          ]}
        >
          <Input.Password
            prefix={<EditFilled />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item
          name="repassword"
          rules={[
            {
              required: true,
              message: 'Trường nhập lại mật khẩu dài tối thiểu 6 ký tự',
            },
          ]}
        >
          <Input.Password
            prefix={<EditFilled />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="Gõ lại mật khẩu"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            Tôi đã đọc và đồng ý với <Link to="/#">Điều khoản sử dụng</Link>
          </Checkbox>
          <div className="rules-form-content">
            <p className="rules-form-content-1">
              Bạn cần đồng ý với Điều khoản sử dụng trước khi đăng ký!
            </p>
            <p className="rules-form-content-2">
              (*) Bằng viêc đăng ký bạn đồng ý để haha.edu.vn liên hệ tư vấn
            </p>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
        <div className="footer-login">
          <div className="forgot-password">
            Bạn có tài khoản rồi à?{' '}
            <Button
              type="link"
              onClick={() => {
                setType('login');
              }}
            >
              Đăng nhập
            </Button>{' '}
            thôi!
          </div>
        </div>
      </Form>
    );
  };

  const renderForgotPassword = () => {
    return (
      <Form
        form={form}
        className="login-form app-form"
        name="forgot-form"
        onFinish={onSubmitForgotPassword}
      >
        <h2 className="form-title">Lấy lại mật khẩu</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập SĐT hoặc Email' }]}
        >
          <Input placeholder="SĐT/Email/Username" prefix={<MailFilled />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lấy lại mật khẩu
          </Button>
        </Form.Item>
        <div className="footer-login">
          <div className="forgot-password">
            Bạn có tài khoản rồi à?{' '}
            <a
              onClick={() => {
                setType('login');
              }}
            >
              Đăng nhập ngay
            </a>
          </div>
          <div className="forgot-password">
            Bạn chưa có tài khoản?{' '}
            <a
              onClick={() => {
                setType('register');
              }}
            >
              Đăng ký
            </a>{' '}
            gấp
          </div>
        </div>
      </Form>
    );
  };

  const renderForgotPasswordSucses = () => {
    return (
      <div className="form-sucsess">
        <CheckCircleOutlined />
        <h3>Bạn vui lòng kiểm tra email</h3>
        <p>
          Một thư chứa đường dẫn khôi phục mật khẩu đã được gửi cho địa chỉ
          email tài khoản của bạn. Đường dẫn sẽ hết hạn sau 3 ngày.
        </p>
      </div>
    );
  };
  const renderRegisterSucses = () => {
    return (
      <div className="form-sucsess">
        <CheckCircleOutlined />
        <h3>Bạn vui lòng kiểm tra email</h3>
        <p>
          Một thư chứa đường dẫn khôi phục mật khẩu đã được gửi cho địa chỉ
          email tài khoản của bạn click vào link đển xác nhận mật khẩu
        </p>
      </div>
    );
  };
  // const renderForgotPasswordFalse = () => {
  //   return (
  //     <div className="form-sucsess">
  //       <CloseCircleOutlined />
  //       <h3>Email gửi thất bại</h3>
  //       <p>Tài khoản email này không hợp lệ</p>
  //     </div>
  //   );
  // };
  const renderLoggedIn = () => {
    const user = JSON.parse(userInfo);
    return (
      <>
        <div className="noti-bell">
          <img src={bellImg} />
        </div>
        <div className="logged-info-buttons">
          <ul className="menu-logged">
            <li>
              <Link to="/">
                <img src={avatarUser} />
                <span>{user.username}</span>
              </Link>
              <ul className="sub-logged-menu">
                <li>
                  <div className="info-user">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <Link to="/user">Thông tin cá nhân</Link>
                  </div>
                </li>
                <li>
                  <div className="info-user">
                    <i className="fa fa-leanpub" aria-hidden="true"></i>
                    <Link to="/user">Khóa học của tôi</Link>
                  </div>
                </li>
                <li>
                  <div className="info-user">
                    <i className="fa fa-pie-chart" aria-hidden="true"></i>
                    <Link to="/user">Qúa trình học tập </Link>
                  </div>
                </li>
                <li>
                  <div className="info-user">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <Link to="/user">Kích hoạt khóa học</Link>
                  </div>
                </li>
                <li>
                  <div className="info-user">
                    <i className="fa fa-power-off" aria-hidden="true"></i>
                    <Link to="/#" onClick={() => onLogout()}>
                      Đăng xuất
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const renderNotLoggedIn = () => {
    return (
      <>
        <div className="avatar">
          <img src={avatar} />
        </div>
        <div className="button auth-buttons">
          <Button
            type="link"
            className="singin"
            onClick={() => {
              showModal();
              setType('login');
            }}
          >
            Đăng nhập
          </Button>
          <Button
            type="link"
            className="singup"
            onClick={() => {
              showModal();
              setType('register');
            }}
          >
            Đăng ký
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="topbar-login">
      {userToken ? renderLoggedIn() : renderNotLoggedIn()}
      <Modal
        className="auth-modal"
        wrapClassName="auth-content-modal"
        maskStyle={{ background: 'rgba(255, 355, 255, 0.45)' }}
        maskClosable={false}
        header={null}
        footer={null}
        mask={true}
        visible={visiable}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {type === 'login' && renderLogin()}
        {type === 'register' && renderRegister()}
        {type === 'forgot_password' && renderForgotPassword()}
        {type === 'forgot_password_sucsses' && renderForgotPasswordSucses()}
        {type === 'register_sucsses' && renderRegisterSucses()}
      </Modal>
    </div>
  );
}

export default LoginModal;
