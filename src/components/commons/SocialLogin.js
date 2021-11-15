import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { config } from 'configs';
import React, { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { doLogin } from 'redux/users/action';

function SocialLogin(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogin = (values, oauth) => {
    let data = {};

    if (oauth === 'facebook') {
      data = {
        oauth,
        info: {
          email: values.email,
          fullname: values.name,
          image: values.picture.data.url,
          accessToken: values.accessToken,
        },
      };
    }
    if (oauth === 'google') {
      data = {
        oauth,
        info: {
          email: values.profileObj.email,
          fullname: values.profileObj.name,
          image: values.profileObj.imageUrl,
          accessToken: values.accessToken,
        },
      };
    }
    const callback = () => {
      props.setVisible(false);
    };
    dispatch(doLogin({ ...data, callback }));
  };
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return (
    <Row className="social-login">
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="facebook">
        <FacebookLogin
          appId={config.AUTH_SOCIAL.FACEBOOK_APP_ID}
          fields="name,email,picture"
          render={(renderProps) => (
            <Button
              block
              onClick={renderProps.onClick}
              shape="round"
              type="dashed"
              icon={<FacebookOutlined />}
              className="facebook-btn"
            >
              <span> Đăng nhập bằng facebook</span>
            </Button>
          )}
          callback={(data) => onLogin(data, 'facebook')}
        />
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="google">
        <GoogleLogin
          clientId={config.AUTH_SOCIAL.GOOOGLE_APP_ID}
          render={(renderProps) => (
            <Button
              block
              onClick={renderProps.onClick}
              shape="round"
              danger
              icon={<GooglePlusOutlined />}
              className="google-btn"
            >
              <span> Đăng nhập bằng google</span>
            </Button>
          )}
          onSuccess={(data) => onLogin(data, 'google')}
          onFailure={(error) => () => console.log('Error', error)}
        />
      </Col>
    </Row>
  );
}

export default SocialLogin;
