// import external libs
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Layout, Row, Col, Tabs } from 'antd';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { ClockCircleFilled, EyeFilled, BookFilled } from '@ant-design/icons';

// import internal libs
import 'containers/news/NewsDetail.css';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import bannerListNews from 'assets/images/banner-news.jpg';
import bannerRightCategory from 'assets/images/list-new.jpg';
import bannerRightCategorys from 'assets/images/banner.png';
import Loading from 'components/parts/loading/Loading';
import NoRecord from 'components/errors/NoRecord';

import { fetchPost } from 'redux/posts/action';
import { formatedDate } from 'helpers/common';

const { Content } = Layout;
const { TabPane } = Tabs;

function NewsDetail() {
  const post = useSelector((state) => state.post);
  const error = get(post, 'item.error', undefined);
  const dispatch = useDispatch();
  const params = useParams();

  const contentPost = get(post, 'item.result.data', {});
  console.log(333, contentPost);

  const renderDetail = () => {
    if (error.message) return <NoRecord />;
    return (
      <>
        <h1 className="single-title">{contentPost.title}</h1>
        <div className="list-author-single">
          <div className="author">
            Tác giả <span>Admin</span>
          </div>
          <div className="date">
            <ClockCircleFilled />
            {formatedDate(contentPost.createdAt)}
          </div>
          <div className="watched">
            <EyeFilled /> {contentPost.viewed}
          </div>
        </div>
        <div
          className="content-single"
          dangerouslySetInnerHTML={{ __html: contentPost.content }}
        />
      </>
    );
  };

  useEffect(() => {
    dispatch(fetchPost({ id: params.id }));
  }, [params]);

  return (
    <Layout className="main-app">
      {get(post, 'item.loading', false) && <Loading />}
      <AppHeader />
      <Content className="app-content">
        <div className="news-banner">
          <img src={bannerListNews} alt="" />
        </div>
        <AppBreadCrumb />
        <div className="list-news-box-single">
          <div className="wraper list-news-bg">
            <Row gutter={[20]}>
              <Col xl={16} sm={24} xs={24} className="news-left">
                {renderDetail()}
              </Col>
              <Col xl={8} sm={24} xs={24} className="news-right">
                <div className="tab-category-single">
                  <h1 className="category-right-title-single">Bài khác</h1>
                  <Tabs defaultActiveKey="1">
                    <TabPane
                      tab="Nhiều lượt xem"
                      key="1"
                      className="tab-category-1"
                    >
                      <img src={bannerRightCategory} alt="" />
                      <div className="content-tab-category-single">
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
                    </TabPane>
                    <TabPane
                      tab="Bài mới nhất"
                      key="2"
                      className="tab-category-1"
                    >
                      <img src={bannerRightCategory} alt="" />
                      <div className="content-tab-category-single">
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
                    </TabPane>
                  </Tabs>
                </div>
                <div className="category-right-single">
                  <h1 className="category-right-title-single">
                    Danh mục hoc tập
                  </h1>
                  <div className="content-category-single">
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
                  <div className="banner-bottom">
                    <img src={bannerRightCategorys} alt="" />
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

export default NewsDetail;
