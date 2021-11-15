// import external libs
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { Affix, Button, Col, Input, Layout, Row } from 'antd';
import { Link } from 'react-scroll';
import { useParams } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import { get } from 'lodash';

// import internal libs
import 'containers/courses/CourseDetail.css';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import AppFooter from 'components/parts/footer/AppFooter';
import AppHeader from 'components/parts/header/AppHeader';
import CourseTitle from 'containers/courses/components/CourseTitle';
import Curriculum from 'containers/courses/components/Curriculum';
import Review from 'containers/courses/components/Review';
import Loading from 'components/parts/loading/Loading';
import NoRecord from 'components/errors/NoRecord';

import { API_URL } from 'configs';
import { formatedPrice, removeHtmlTag } from 'helpers/common';
import { fetchCourse } from 'redux/courses/action';
const { Content } = Layout;

function CourseDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const error = get(course, 'item.error', undefined);
  const contentCourse = get(course, 'item.result.data.course', {});

  console.log(222, contentCourse);
  console.log(111, course);
  const renderPrice = (course) => {
    if (course.price_sale && course.price_origin) {
      return (
        <div className="prices">
          <div className="price">
            <span>{formatedPrice(course.price_origin)}</span> <sup>vnđ</sup>
          </div>
          <div className="sale-price">
            chỉ còn <span>{formatedPrice(course.price_sale)}</span>
            <sup>vnđ</sup>
          </div>
        </div>
      );
    } else if (!course.price_sale && course.price_origin) {
      return (
        <div className="prices">
          <div className="price">
            <span>{formatedPrice(course.price)}</span> <sup>vnđ</sup>
          </div>
        </div>
      );
    } else {
      return (
        <div className="prices">
          <div className="price">
            <span>Liên hệ</span>
          </div>
        </div>
      );
    }
  };

  const renderCoursesDetails = () => {
    if (!contentCourse || error.message) return <NoRecord />;
    return (
      <div className="wraper">
        <Row gutter={[20, 30]}>
          <Col lg={1} sm={24} xs={24}></Col>
          <Col xl={15} lg={13} sm={24} xs={24} className="course-detail-left">
            <Affix offsetTop={-25}>{showCourse()}</Affix>
            <div className="course-info" id="info">
              <h3>Thông tin khóa học</h3>
              <div className="course-content">
                <iframe
                  src={contentCourse.url_video}
                  className="course-video"
                ></iframe>
                <ShowMoreText
                  lines={3}
                  more="Xem thêm"
                  less="Rút gọn"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  onClick={() => executeOnClick()}
                  expanded={false}
                  width={780}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contentCourse.content,
                    }}
                  ></div>
                </ShowMoreText>
              </div>
            </div>
            <Curriculum course={contentCourse} />
            <Review />
          </Col>
          <Col xl={8} lg={10} sm={24} xs={24} className="course-detail-right">
            <div className="course-info">
              <figure>
                <img
                  src={`${contentCourse.url_thumnail}`}
                  alt={contentCourse.course_name}
                  width={'100%'}
                />
              </figure>
              {renderPrice(contentCourse)}
              <div className="course-buttons">
                <Button className="btn-support">
                  <h3>
                    <a href="https://zalo.me/g/ktttlx872" target="_blank">
                      TƯ VẤN THÊM
                    </a>
                  </h3>
                </Button>
                <Button className="btn-course-register">
                  <h3>
                    <a
                      href={`https://unica.vn/order/step1?id=${params.id}&aff=284040&coupon=WEB5NGAY`}
                      target="_blank"
                    >
                      Đăng ký khóa học
                    </a>
                  </h3>
                </Button>
              </div>
              <div className="course-target">
                <div className="target-one">
                  <h3>Mục tiêu khóa học </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contentCourse.benefit,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const executeOnClick = (isExpanded) => {};
  const [flag, setFlag] = useState(false);
  const checkCourse = () => {
    setFlag(!flag);
  };
  const closeCourse = () => {
    setFlag(!flag);
  };
  const showCourse = () => {
    if (flag === true) {
      return (
        <div className="menu-input">
          <Input
            size="small"
            placeholder="Tìm kiếm bài học"
            prefix={<CloseOutlined onClick={() => closeCourse()} />}
            className="menu-input-fix"
          />
          <Button className="info-courses">
            <i className="fa fa-search" aria-hidden="true"></i>
          </Button>
        </div>
      );
    } else {
      return (
        <div className="menu-course">
          <Button className="info-course info-course-button">
            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              width={'100%'}
            >
              <h3>Thông tin khóa học</h3>
            </Link>
          </Button>
          <Button className="info-course curriculum-course-button">
            <Link
              to="curriculum"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              width={'100%'}
              to="info"
            >
              <h3>Chương trình khóa học</h3>
            </Link>
          </Button>
          <Button className="info-courses" onClick={() => checkCourse()}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </Button>
        </div>
      );
    }
  };

  const renderCourse = () => {
    return (
      <Content className="app-content">
        <AppBreadCrumb />
        <CourseTitle course={contentCourse} />
        {renderCoursesDetails()}
      </Content>
    );
  };

  useEffect(() => {
    dispatch(fetchCourse({ id: params.id }));
  }, []);

  return (
    <Layout className="main-app">
      <AppHeader />
      {get(course, 'item.loading', false) && <Loading />}
      {renderCourse()}
      <AppFooter />
    </Layout>
  );
}

export default CourseDetail;
