import React, { useEffect } from 'react';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import CourseList from 'components/parts/courses/CourseList';
import CourseCategoryList from 'components/parts/courses/CourseCategoryList';
import { fetchCourses } from 'redux/courses/action';
import Loading from 'components/parts/loading/Loading';
import { useParams } from 'react-router';

const { Header, Content, Footer } = Layout;

// import internal libs

function ListCourses() {
  const dispatch = useDispatch();
  const params = useParams();
  const course = useSelector((state) => state.course);
  const courses = get(course, 'list.result.data.course', []);

  console.log(3333, courses);
  useEffect(() => {
    dispatch(fetchCourses({ page: 1, [params.type]: params.id }));
  }, []);
  return (
    <Layout className="main-app">
      <AppHeader />
      {get(course, 'list.loading', false) && <Loading />}
      <Content className="app-content">
        <AppBreadCrumb />
        <CourseCategoryList courses={courses} />
        {/* <CourseList /> */}
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default ListCourses;
