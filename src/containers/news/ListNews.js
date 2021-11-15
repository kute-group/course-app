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
import bannerListNews from 'assets/images/banner-news.jpg';
import bannerRightCategory from 'assets/images/list-new.jpg';
import bannerRightCategorys from 'assets/images/banner.png';
import {
  ClockCircleFilled,
  FlagFilled,
  EyeFilled,
  BookFilled,
  UserOutlined,
} from '@ant-design/icons';

import Loading from 'components/parts/loading/Loading';
import NoRecord from 'components/errors/NoRecord';

import 'containers/news/ListNews.css';
import { formatedDate, removeHtmlTag } from 'helpers/common';
import { fetchPosts } from 'redux/posts/action';
import { API_URL } from 'configs';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

// import internal libs

function ListNews(props) {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const renderPosts = () => {
    const posts = get(post, 'list.result.data', []);
    const error = get(post, 'list.error', undefined);
    console.log(444, posts);
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
                <UserOutlined /> <span>Admin</span>
              </div>
              <div className="date">
                <ClockCircleFilled /> {formatedDate(item.createAt)}
              </div>
              <div className="watched">
                <EyeFilled /> 11
              </div>
            </div>
            <p className="news-description">
              {removeHtmlTag(item.description)}
            </p>
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
          <img src={bannerListNews} alt="" />
        </div>
        <AppBreadCrumb />
        <div className="list-news-box-archive">
          <div className="wraper list-news-bg">
            <Row gutter={[20]}>
              <Col xl={16} sm={24} xs={24} className="news-left">
                <h1 className="archive-title">Góc học tập</h1>
                <div className="the-date">
                  <div className="the-time">
                    <ClockCircleFilled /> 05/03/2021
                  </div>
                  <div className="the-flag">
                    <FlagFilled /> 283
                  </div>
                </div>
                {renderPosts()}
              </Col>
              <Col xl={8} sm={24} xs={24} className="news-right">
                <div className="category-right-archive">
                  <h1 className="category-right-title-archive">
                    Danh mục học tập
                  </h1>
                  <div className="content-category-archive">
                    <ul>
                      <li>
                        <BookFilled /> <Link to="/#">Toán 1</Link>
                      </li>
                      <li>
                        <BookFilled /> <Link to="/#">Toán 2</Link>
                      </li>
                      <li>
                        <BookFilled /> <Link to="/#">Toán 3</Link>
                      </li>
                      <li>
                        <BookFilled /> <Link to="/#">Toán 4</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-category-archive">
                  <h1 className="category-right-title-archive">Bài khác</h1>
                  <Tabs defaultActiveKey="1">
                    <TabPane
                      tab="Nhiều lượt xem"
                      key="1"
                      className="tab-category-1"
                    >
                      <img src={bannerRightCategory} alt="" />
                      <div className="content-tab-category-archive">
                        <ul>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <img src={bannerRightCategorys} alt="" />
                    </TabPane>
                    <TabPane
                      tab="Bài mới nhất"
                      key="2"
                      className="tab-category-1"
                    >
                      <img src={bannerRightCategory} alt="" />
                      <div className="content-tab-category-archive">
                        <ul>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              Kỹ năng làm chủ tư duy môn Toán bằng Sơ đồ
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <img src={bannerRightCategorys} alt="" />
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

export default ListNews;
