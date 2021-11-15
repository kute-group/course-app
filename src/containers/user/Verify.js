// import external libs
import Icon from '@ant-design/icons';
import { Avatar, Button, Col, Row, Spin } from 'antd';
// import internal libs
import logoImage from 'assets/images/logo.png';
import { cryptoUnHash } from 'helpers/common';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { doVerify } from 'redux/users/action';

function Verify(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const config = useSelector((state) => state.config);
  const success = () => (
    <Row>
      <Col xs={24} md={16}>
        <h2>
          Hi{' '}
          {props.user.verify.result && props.user.verify.result.success
            ? props.user.verify.result.user.email
            : ''}
          ,{' '}
        </h2>
        <p>Chúc mừng bạn đã xác thực thành công</p>
        <Link to="/auth/login">
          <Button type="link">
            <Icon type="arrow-right" /> Đăng nhập
          </Button>
        </Link>
      </Col>
      <Col xs={24} md={8}>
        <Avatar size={100} />
      </Col>
    </Row>
  );

  const error = () => (
    <Row>
      <Col xs={24} md={24}>
        <h2>Ohhh, đã có lỗi xảy ra!</h2>
        <p>Không thể xác thực tài khoản của bạn</p>
        <Link to="/">
          <Button type="link">
            <Icon type="arrow-right" /> Về trang chủ
          </Button>
        </Link>
      </Col>
    </Row>
  );

  useEffect(() => {
    const urlQuery = queryString.parse(props.location.search);
    const currentTime = new Date().getTime();
    const expireDate = cryptoUnHash(urlQuery.keyCode);
    if (currentTime < Number(expireDate)) {
      dispatch(doVerify({ id: urlQuery.userId }));
    }
  }, []);

  return (
    <div className="verify-container">
      <Helmet>
        <title>Xác nhận tài khoản</title>
      </Helmet>
      <div className="logo">
        <Link to="/">
          <Avatar size={130} src={logoImage} />
        </Link>
        {props.user.verify.loading ? (
          <div className="loading-spin">
            {' '}
            <Spin />
          </div>
        ) : (
          <div className="auth-block">
            {props.user.verify &&
            props.user.verify.result &&
            props.user.verify.result.success
              ? success()
              : error()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Verify;
