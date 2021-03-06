import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';
import moment from 'moment';
import { Layout, Menu, Row, Col, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import CourseList from 'components/parts/courses/CourseList';
import CourseCategoryList from 'components/parts/courses/CourseCategoryList';
import bannerTeachers from 'assets/images/banner-news.jpg';
import teamImg from 'assets/images/team.jpg';
import {
  ClockCircleFilled,
  FlagFilled,
  EyeFilled,
  BookFilled,
  UserOutlined,
} from '@ant-design/icons';

import Loading from 'components/parts/loading/Loading';
import NoRecord from 'components/errors/NoRecord';

import 'containers/teachers/ListTeachers.css';
import { formatedDate } from 'helpers/common';
import { fetchPosts } from 'redux/posts/action';
import { API_URL } from 'configs';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

// import internal libs

function ListTeachers(props) {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const renderPosts = () => {
    const posts = get(post, 'list.result.data', []);
    const error = get(post, 'list.error', undefined);
    // show data
    const listPosts = posts.map((item, idx) => (
      <Col key={idx} xl={12} sm={12} xs={24} className="list-news-row">
        <div className="list-news-box">
          <div className="image-box">
            <Link to={`/post/${item._id}`}>
              <img src={`${API_URL}/${item.image}`} alt={item.title} />
            </Link>
          </div>
          <div className="box-text">
            <h3 className="list-news-title-archive">
              <Link to={`/post/${item._id}`}>{item.title}</Link>
            </h3>
            <div className="list-author-archive">
              <div className="author">
                <UserOutlined />{' '}
                <span>{get(item, 'author.fullname', 'Admin')}</span>
              </div>
              <div className="date">
                <ClockCircleFilled /> {formatedDate(item.createAt)}
              </div>
              <div className="watched">
                <EyeFilled /> 1256
              </div>
            </div>
            <p className="news-description">{item.description}</p>
          </div>
        </div>
      </Col>
    ));

    if (listPosts.length === 0 || error.message) return <NoRecord />;

    return (
      <div className="list-news">
        <Row gutter={[20]}>{listPosts}</Row>
      </div>
    );
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Layout className="main-app">
      {get(post, 'list.loading', false) && <Loading />}
      <AppHeader />
      <Content className="app-content">
        <div className="news-banner">
          <img src={bannerTeachers} alt="" />
        </div>
        <AppBreadCrumb />
        <div className="list-teacher-archive">
          <div className="wraper wraper-teacher-bg">
            <h3 className="list-our-team-title">?????i ng?? gi??o vi??n</h3>
            <Row gutter={[20]}>
              <Col xl={8} sm={12} xs={24}>
                <div className="our-team-box">
                  <div className="image-box">
                    <Link to="/#">
                      <img src={teamImg} alt="" />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h3 className="our-team-title">
                      <Link to="/#">C?? L?? Th??y V??n</Link>
                    </h3>
                    <p className="our-team-office">
                      Gi??o vi??n to??n, Tr?????ng ti???u h???c Nam Th??nh C??ng
                    </p>
                    <p className="our-team-description">
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i, cung c???p
                      nh???ng kho?? h???c online ch???t l?????ng cao cho h???c sinh ti???u
                      h???c, THCS v?? THPT. Haha.edu.vn l?? tr???i nghi???m h???c t???p
                      tuy???t v???i. Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i.
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} sm={12} xs={24}>
                <div className="our-team-box">
                  <div className="image-box">
                    <Link to="/#">
                      <img src={teamImg} alt="" />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h3 className="our-team-title">
                      <Link to="/#">C?? L?? Th??y V??n</Link>
                    </h3>
                    <p className="our-team-office">
                      Gi??o vi??n to??n, Tr?????ng ti???u h???c Nam Th??nh C??ng
                    </p>
                    <p className="our-team-description">
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i, cung c???p
                      nh???ng kho?? h???c online ch???t l?????ng cao cho h???c sinh ti???u
                      h???c, THCS v?? THPT. Haha.edu.vn l?? tr???i nghi???m h???c t???p
                      tuy???t v???i. Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i.
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} sm={12} xs={24}>
                <div className="our-team-box">
                  <div className="image-box">
                    <Link to="/#">
                      <img src={teamImg} alt="" />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h3 className="our-team-title">
                      <Link to="/#">C?? L?? Th??y V??n</Link>
                    </h3>
                    <p className="our-team-office">
                      Gi??o vi??n to??n, Tr?????ng ti???u h???c Nam Th??nh C??ng
                    </p>
                    <p className="our-team-description">
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i, cung c???p
                      nh???ng kho?? h???c online ch???t l?????ng cao cho h???c sinh ti???u
                      h???c, THCS v?? THPT. Haha.edu.vn l?? tr???i nghi???m h???c t???p
                      tuy???t v???i. Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i.
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} sm={12} xs={24}>
                <div className="our-team-box">
                  <div className="image-box">
                    <Link to="/#">
                      <img src={teamImg} alt="" />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h3 className="our-team-title">
                      <Link to="/#">C?? L?? Th??y V??n</Link>
                    </h3>
                    <p className="our-team-office">
                      Gi??o vi??n to??n, Tr?????ng ti???u h???c Nam Th??nh C??ng
                    </p>
                    <p className="our-team-description">
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i, cung c???p
                      nh???ng kho?? h???c online ch???t l?????ng cao cho h???c sinh ti???u
                      h???c, THCS v?? THPT. Haha.edu.vn l?? tr???i nghi???m h???c t???p
                      tuy???t v???i. Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i.
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} sm={12} xs={24}>
                <div className="our-team-box">
                  <div className="image-box">
                    <Link to="/#">
                      <img src={teamImg} alt="" />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h3 className="our-team-title">
                      <Link to="/#">C?? L?? Th??y V??n</Link>
                    </h3>
                    <p className="our-team-office">
                      Gi??o vi??n to??n, Tr?????ng ti???u h???c Nam Th??nh C??ng
                    </p>
                    <p className="our-team-description">
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i, cung c???p
                      nh???ng kho?? h???c online ch???t l?????ng cao cho h???c sinh ti???u
                      h???c, THCS v?? THPT. Haha.edu.vn l?? tr???i nghi???m h???c t???p
                      tuy???t v???i. Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i.
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} sm={12} xs={24}>
                <div className="our-team-box">
                  <div className="image-box">
                    <Link to="/#">
                      <img src={teamImg} alt="" />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h3 className="our-team-title">
                      <Link to="/#">C?? L?? Th??y V??n</Link>
                    </h3>
                    <p className="our-team-office">
                      Gi??o vi??n to??n, Tr?????ng ti???u h???c Nam Th??nh C??ng
                    </p>
                    <p className="our-team-description">
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i, cung c???p
                      nh???ng kho?? h???c online ch???t l?????ng cao cho h???c sinh ti???u
                      h???c, THCS v?? THPT. Haha.edu.vn l?? tr???i nghi???m h???c t???p
                      tuy???t v???i. Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i.
                      Haha.edu.vn l?? tr???i nghi???m h???c t???p tuy???t v???i
                    </p>
                  </div>
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

export default ListTeachers;
