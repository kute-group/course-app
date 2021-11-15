import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Pagination, Row, Col, Button } from 'antd';
import 'components/parts/courses/CourseList.css';
import { ArrowRightOutlined, ContactsFilled } from '@ant-design/icons';
import { fetchCourses } from 'redux/courses/action';
import courseA from 'assets/images/course.jpg';
import courseB from 'assets/images/courseB.jpg';

import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

// import internal libs

function CourseList(props) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const courses = get(course, 'list.result.data.data.course', []);

  useEffect(() => {
    dispatch(fetchCourses({ page: 1 }));
  }, []);

  const renderCourses = () => {
    const items = courses.map((item, index) => {
      return (
        <Col xl={8} sm={8} xs={12} className="course-row" key={index}>
          <div className="course-box">
            <div className="image-box">
              <Link to={`/course/${item.id}/${item.url_course}`}>
                <img src={item.url_thumnail} alt="" />
              </Link>
            </div>
            <section className="course-text">
              <h3 className="course-title">
                <Link to={`/course/${item.id}/${item.url_course}`}>
                  {item.course_name}
                </Link>
              </h3>
              <p className="course-teacher">
                <ContactsFilled /> GV: {item.teacher_name}
              </p>
              <div
                className="course-description"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              <Button className="btn-view-more">
                <Link to={`/course/${item.id}/${item.url_course}`}>
                  <ArrowRightOutlined /> Xem thêm
                </Link>
              </Button>
            </section>
          </div>
        </Col>
      );
    });
    return (
      <Row gutter={[20, 30]}>
        {items}
        <Pagination
          current={page}
          total={1500}
          pageSize={15}
          showSizeChanger={false}
          onChange={(page, pageSize) => {
            setPage(page);
            dispatch(fetchCourses({ page }));
          }}
        />
      </Row>
    );
  };
  return (
    <div className="course-list">
      <div className="wraper">
        <h2 className="courses-title">Danh sách khóa học</h2>
        {renderCourses()}
      </div>
    </div>
  );
}

export default CourseList;
