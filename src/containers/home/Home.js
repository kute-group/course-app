import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'assets/styles/style.css';
import AppHeader from 'components/parts/header/AppHeader';
import AppFooter from 'components/parts/footer/AppFooter';
import BigSlider from 'components/parts/slider/BigSlider';
import ClassList from 'components/parts/courses/ClassList';
import CourseList from 'components/parts/courses/CourseList';
import ListNews from 'components/parts/news/ListNews';
import ListOurTeam from 'components/parts/ourteam/ListOurTeam';
import LearnStep from 'components/parts/learnstep/LearnStep';
import Statisic from 'components/parts/statisic/Statisic';
import Search from 'components/parts/search/Search';

const { Header, Content, Footer } = Layout;

// import internal libs

function Home() {
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <BigSlider />
        <ClassList />
        <Search />
        <CourseList />
        <CourseList />
        <LearnStep />
        <Statisic />
        <ListOurTeam />
        <ListNews />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Home;
