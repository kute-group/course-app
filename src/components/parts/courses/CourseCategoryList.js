import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import 'components/parts/courses/CourseCategoryList.css';
import { ArrowRightOutlined } from '@ant-design/icons';

import courseA from 'assets/images/course.jpg';
import courseB from 'assets/images/courseB.jpg';

import courseBgA from 'assets/images/bgCourse1.jpg';
import courseBgB from 'assets/images/bgCourse2.jpg';

import { Link } from 'react-router-dom';
import { API_URL } from 'configs';
import { formatedPrice } from 'helpers/common';

// import internal libs
import { formatedDate, removeHtmlTag } from 'helpers/common';

const { Header, Content, Footer } = Layout;

function CourseCategoryList(props) {
  const { courses } = props;

  const renderPricePrice = (course) => {
    if (course.price_sale && course.price_origin) {
      return (
        <div className="prices">
          <div className="price">
            <span>{formatedPrice(course.price_origin)}</span> <sup>vnđ</sup>
          </div>
          <div className="sale-price">
            chỉ còn <span>{formatedPrice(course.price_sale)}</span>{' '}
            <sup>vnđ</sup>
          </div>
        </div>
      );
    } else if (!course.price_sale && course.price_origin) {
      return (
        <div className="prices">
          <div className="price">
            <span>{formatedPrice(course.price_origin)}</span> <sup>vnđ</sup>
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

  const renderCourses = () => {
    const listCourses = courses.map((course, idx) => (
      <Row gutter={[0]} className="course-row" key={idx}>
        <Col
          xl={12}
          sm={24}
          xs={24}
          className="course-cate-left"
          style={{
            backgroundImage: `url(${idx % 2 === 1 ? courseBgA : courseBgB})`,
          }}
        >
          <div className="cate-course-box">
            <section className="course-text">
              <h3 className="course-title">
                <Link to={`/course/${course.id}/${course.url_course}`}>
                  {course.course_name}
                </Link>
              </h3>
              <p className="course-description">
                {removeHtmlTag(course.content)}
              </p>
              {renderPricePrice(course)}
              <Button className="btn-view-more">
                <Link to={`/course/${course.id}/${course.url_course}`}>
                  <ArrowRightOutlined /> Xem thêm
                </Link>
              </Button>

              <Button className="btn-register">
                <a href={`https://unica.vn/order/step1?id=${course.id}&aff=284040&coupon=WEB5NGAY`} target='_blank'>
                  <ArrowRightOutlined /> Đăng ký
                </a>
              </Button>
            </section>
          </div>
        </Col>
        <Col xl={12} sm={0} xs={0} className="course-cate-right">
          <img src={course.url_thumnail} alt={course.course_name} />
        </Col>
      </Row>
    ));
    return listCourses;
  };
  return (
    <div className="category-course-list">
      <div className="wraper wraper-category-courses">
        <h2 className="category-courses-title">Danh sách khóa học</h2>
        {renderCourses()}
      </div>
    </div>
  );
}

export default CourseCategoryList;
