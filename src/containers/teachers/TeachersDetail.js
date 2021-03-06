import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';
import moment from 'moment';
import { Layout, Menu, Row, Col, Tabs } from 'antd';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import CourseList from 'components/parts/courses/CourseList';
import CourseCategoryList from 'components/parts/courses/CourseCategoryList';
import bannerListNews from 'assets/images/banner-news.jpg';
import {
  ClockCircleFilled,
  FlagFilled,
  EyeFilled,
  BookFilled,
} from '@ant-design/icons';
import bannerBottom from 'assets/images/banner.png';
import teacherInfo from 'assets/images/team.jpg';
import Loading from 'components/parts/loading/Loading';
import 'containers/teachers/TeachersDetail.css';
import { fetchPost } from 'redux/posts/action';
import { formatedDate } from 'helpers/common';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

// import internal libs

function TeachersDetail(props) {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  const contentPost = get(post, 'item.result.data', {});

  useEffect(() => {
    dispatch(fetchPost({ id: params.id }));
  }, []);
  return (
    <Layout className="main-app">
      {get(post, 'item.loading', false) && <Loading />}
      <AppHeader />
      <Content className="app-content">
        <div className="news-banner">
          <img src={bannerListNews} alt="" />
        </div>
        <AppBreadCrumb />
        <div className="list-teacher-single">
          <div className="wraper wraper-teacher-single-bg">
            <Row gutter={[20]}>
              <Col xl={16} sm={24} xs={24} className="news-left">
                <h1 className="teacher-title">C?? ?????ng Th??? Minh T??m</h1>
                <div className="content-teacher-single">
                  <Row gutter={[20]}>
                    <Col xl={6} sm={8} xs={24}>
                      <img src={teacherInfo} alt="" />
                    </Col>
                    <Col xl={18} sm={16} xs={24}>
                      <div className="your-job">C??ng vi???c: Gi??o vi??n To??n</div>
                      <div className="address">
                        N??i l??m vi???c: Tr?????ng THCS H?? N???i
                      </div>
                      <div className="teacher-description">
                        Kh??a h???c g???m c??c b??i gi???ng tr??nh b??y v??? nh???ng ki???n th???c
                        n???n t???ng quan tr???ng nh???t ????? c?? th??? h???c t???t m??n to??n l???p
                        3. Nh???ng b??i gi???ng ???????c s???p x???p theo tr??nh t??? ph??t tri???n
                        ??i l??n c???a m???ch ki???n th???c v?? c?? b??m s??t theo ch????ng
                        tr??nh SGK.
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xl={8} sm={24} xs={24} className="news-right">
                <div className="teacher-right-single">
                  <h1 className="teacher-right-title-single">Gi??o vi??n kh??c</h1>
                  <div className="content-list-teacher-single">
                    <ul>
                      <li>
                        <Row gutter={[20]}>
                          <Col xl={6} sm={4} xs={8}>
                            <img src={teacherInfo} alt="" />
                          </Col>
                          <Col xl={18} sm={20} xs={16}>
                            <div className="full-name-teacher">
                              <h3>
                                <Link to="/#">Nguy???n V??n Tu???n</Link>
                              </h3>
                            </div>
                            <div className="your-job">
                              C??ng vi???c: Gi??o vi??n To??n
                            </div>
                          </Col>
                        </Row>
                      </li>
                      <li>
                        <Row gutter={[20]}>
                          <Col xl={6} sm={4} xs={8}>
                            <img src={teacherInfo} alt="" />
                          </Col>
                          <Col xl={18} sm={20} xs={16}>
                            <div className="full-name-teacher">
                              <h3>
                                <Link to="/#">Nguy???n V??n Tu???n</Link>
                              </h3>
                            </div>
                            <div className="your-job">
                              C??ng vi???c: Gi??o vi??n To??n
                            </div>
                          </Col>
                        </Row>
                      </li>
                      <li>
                        <Row gutter={[20]}>
                          <Col xl={6} sm={4} xs={8}>
                            <img src={teacherInfo} alt="" />
                          </Col>
                          <Col xl={18} sm={20} xs={16}>
                            <div className="full-name-teacher">
                              <h3>
                                <Link to="/#">Nguy???n V??n Tu???n</Link>
                              </h3>
                            </div>
                            <div className="your-job">
                              C??ng vi???c: Gi??o vi??n To??n
                            </div>
                          </Col>
                        </Row>
                      </li>
                    </ul>
                  </div>
                  <div className="banner-bottom">
                    <img src={bannerBottom} alt="" />
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

export default TeachersDetail;
