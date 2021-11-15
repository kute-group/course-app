import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import 'components/parts/courses/CourseList.css';
import { ArrowRightOutlined, ContactsFilled } from '@ant-design/icons';

import courseA from 'assets/images/course.jpg';
import courseB from 'assets/images/courseB.jpg';

import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

// import internal libs

function CourseList() {
  return (
    <div className="course-list">
      <div className="wraper">
        <h2 className="courses-title">Khóa học tiểu học nổi bật</h2>
        <Row gutter={[20, 30]}>
          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseA} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                  Khóa học cung cấp đầy đủ kiến thức
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>

          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseB} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseA} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>

          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseB} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseA} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>

          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseB} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseA} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>

          <Col xl={6} sm={6} xs={12} className="course-row">
            <div className="course-box">
              <div className="image-box">
                <Link to="/course/khoa-hoc-toan-10">
                  <img src={courseB} alt="" />
                </Link>
              </div>
              <section className="course-text">
                <h3 className="course-title">
                  <Link to="/course/khoa-hoc-toan-10">Khóa học tốt toán 8</Link>
                </h3>
                <p className="course-teacher">
                  <ContactsFilled /> GV: Cô Lê Thị Hoa
                </p>
                <p className="course-description">
                  Với thời lượng 30 bài học trong 8 giờ, khóa học cung cấp đầy
                  đủ kiến thức cho các em học sinh lớp 8 trong thời gian tới.
                </p>
                <Button className="btn-view-more">
                  <Link to="/course/khoa-hoc-toan-10">
                    <ArrowRightOutlined /> Xem thêm
                  </Link>
                </Button>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CourseList;
