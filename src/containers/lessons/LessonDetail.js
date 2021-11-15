import {
  InfoCircleOutlined,
  LinkOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Button, Col, Input, Layout, List, Rate, Row, Tabs } from 'antd';
import avatar from 'assets/images/avatar.png';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import AppHeader from 'components/parts/header/AppHeader';
import { API_URL } from 'configs';
import 'containers/lessons/LessonDetail.css';
import { get } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCourse } from 'redux/courses/action';
const { TabPane } = Tabs;
const { Search } = Input;
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

const data = [
  { id: 1.1, title: 'Hình Vuông 1' },
  { id: 1.1, title: 'Hình Vuông  2' },
  { id: 1.2, title: 'Hình Vuông  3' },
  { id: 1.3, title: 'Hình Vuông  4' },
  { id: 1.3, title: 'Hình Vuông  4' },
];
function LessonDetail(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const contentCourse = get(course, 'item.result.data', {});

  const renderVideo = () => {
    const lesson = {};
    return (
      <div className="video">
        <video
          controls
          className="lession-video"
          src={`${API_URL}/${lesson.video}`}
        ></video>
        <div className="video-intro">
          <h4 className="title-data">{lesson.title}</h4>
          <Row>
            <Col lg={5} xl={10} md={6} xs={8} sm={6}>
              <div className="infor">
                <div>
                  <span className="duration">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    {lesson.duration}
                  </span>
                  <span className="comments">
                    <i className="fa fa-comments" aria-hidden="true"></i>22
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={13} xl={6} md={8} xs={0} sm={8}></Col>
            <Col lg={6} xl={7} md={10} xs={15} sm={10}>
              <div className="rating">
                <div className="star-rating">
                  <Rate defaultValue={5} className="rate-antd" />
                </div>
                <div className="rating-result">
                  <span className="average">4.1</span> |{' '}
                  <span className="number">64</span> đánh giá
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const renderLesson = () => {
    const renderListItem = (chapter) => {
      const renderLessonList = get(chapter, 'lessons', []);
      const renderLessonListItem = renderLessonList.map((lesson, index) => {
        if (params.id == lesson._id) {
          return (
            <li className="item sectionItem active-lessions " key={index}>
              <h4 className="number">{index}</h4>
              <div className="info">
                <h4 className="title sectionTitle">{lesson.title}</h4>
                <div className="lesson_item_outer">
                  <div className="lesson_item lesson_item_video">
                    <span className="duration">
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                    </span>
                    <span className="comments">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      {lesson.duration}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        } else {
          return (
            <li
              className="item sectionItem"
              onClick={() => console.log(lesson._id)}
            >
              <h4 className="number" key={index}>
                {index}
              </h4>
              <div className="info">
                <h4 className="title sectionTitle">{lesson.title}</h4>
                <div className="lesson_item_outer">
                  <div className="lesson_item lesson_item_video">
                    <span className="duration">
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                    </span>
                    <span className="comments">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      {lesson.duration}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        }
      });
      return renderLessonListItem;
    };
    const listLessonItems = get(contentCourse, 'chapters', []);
    const listLessonItemsDescription = listLessonItems.map((chapter) => {
      return (
        <div className="section-category-list sectionCategoryItem">
          <h2 className="sectionCategoryTitle">{chapter.title}</h2>
          <ul className="video-list">{renderListItem(chapter)}</ul>
        </div>
      );
    });
    return listLessonItemsDescription;
  };

  useEffect(() => {
    dispatch(fetchCourse({ id: params.courseId }));
  }, []);

  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <AppBreadCrumb />
        <div className="lession-detail ">
          <Row gutter={[0, 30]}>
            <Col
              xl={19}
              lg={24}
              sm={24}
              xs={24}
              className="lession-detail-left"
            >
              {renderVideo()}

              <div className="lession-detail-exercise">
                <Button className="button-send-exercise">
                  <div className="css-fix-icon-send">
                    <span>Bài tập</span>
                    <i
                      className="fa fa-pencil-square-o icon-user-send"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Button>
                <Button className="button-send-exercise">
                  <div className="css-fix-icon-send">
                    <span>Bài tập</span>
                    <LinkOutlined className="icon-user-send" />
                  </div>
                </Button>
              </div>

              <div className="exercise-status">
                <p>
                  Bài giảng này chưa có bài ôn tập, các bạn hãy quay lại sau nhé
                </p>
              </div>
            </Col>

            <Col
              xl={5}
              lg={24}
              sm={24}
              xs={24}
              className="lession-detail-right"
            >
              <div className="lession-detail-tabs">
                <Tabs tabPosition="top" size="large">
                  <TabPane
                    tab={<MenuFoldOutlined className="lession-css-icon" />}
                    key="1"
                  >
                    <div className="tab-content full-height scrollbar">
                      <div
                        id="video"
                        className="tab-pane scrollbar fade in active listHoclieu"
                      >
                        <div className="section-category-list sectionCategoryItem">
                          <h2 className="sectionCategoryTitle">
                            Các số đến 10
                          </h2>
                          <ul className="video-list">{renderLesson()}</ul>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane
                    tab={
                      <i
                        className="fa fa-comments lession-css-icon"
                        aria-hidden="true"
                      ></i>
                    }
                    key="2"
                  >
                    <div className="lession-detail-input-menu">
                      <input
                        placeholder="Tìm khóa học"
                        className="input-comments"
                      />
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<img src={avatar} />}
                            title={
                              <Link to="/baitap">
                                <h3 className="title">{item.title}</h3>
                              </Link>
                            }
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      )}
                    />
                    ,
                  </TabPane>
                  <TabPane
                    tab={<InfoCircleOutlined className="lession-css-icon" />}
                    key="3"
                  >
                    <h3 className="lession-css-text">GÓP Ý - BÁO LỖI</h3>
                    <div className="user-comment-lession">
                      <TextArea
                        rows={4}
                        className="input-lession"
                        placeholder="Mô tả qua về lỗi mà bạn gặp"
                      />
                    </div>

                    <div className="button-send-info-user text-center">
                      <p></p>
                      <Button className="button-send-info">
                        <div className="css-fix-icon-send">
                          <i
                            className="fa fa-paper-plane icon-user-send"
                            aria-hidden="true"
                          ></i>
                          <span>Gửi đi</span>
                        </div>
                      </Button>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      {/* <AppFooter /> */}
    </Layout>
  );
}

export default LessonDetail;
