import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { Spin, Skeleton } from 'antd';

import store from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './redux/serviceWorker';
import 'assets/styles/style.css';

import Loading from 'components/parts/loading/Loading';
import ScrollToTop from 'components/commons/ScrollToTop';

const Home = React.lazy(() => import('containers/home/Home'));
const About = React.lazy(() => import('containers/about/About'));
const Contact = React.lazy(() => import('containers/contact/Contact'));
const ListCourses = React.lazy(() => import('containers/courses/ListCourses'));
const CourseDetail = React.lazy(() =>
  import('containers/courses/CourseDetail')
);
const LessonDetail = React.lazy(() =>
  import('containers/lessons/LessonDetail')
);

const Exercise = React.lazy(() => import('containers/courses/Exercise'));

const Register = React.lazy(() => import('containers/register/Register'));
const ForgotPassword = React.lazy(() =>
  import('containers/user/ForgotPassword')
);
const Verify = React.lazy(() => import('containers/user/Verify'));
const ListTeachers = React.lazy(() =>
  import('containers/teachers/ListTeachers')
);
const TeachersDetail = React.lazy(() =>
  import('containers/teachers/TeachersDetail')
);
const ListNews = React.lazy(() => import('containers/news/ListNews'));
const NewsDetail = React.lazy(() => import('containers/news/NewsDetail'));
const User = React.lazy(() => import('containers/user/User'));
const NotFound = React.lazy(() => import('containers/error/NotFound'));
const token = localStorage.getItem('userToken');
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tieu-hoc">
            <Home />
          </Route>
          <Route path="/thcs">
            <Home />
          </Route>
          <Route path="/thpt">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/courses/:id/:type">
            <ListCourses />
          </Route>
          <Route path="/course/:id">
            <CourseDetail />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
          <Route path="/book/:id">
            <Register />
          </Route>
          <Route
            path="/user"
            render={() => (!token ? <Redirect to="/" /> : <User />)}
          />

          <Route path="/teachers">
            <ListTeachers />
          </Route>
          <Route path="/teacher/:id">
            <TeachersDetail />
          </Route>
          <Route path="/posts">
            <ListNews />
          </Route>
          <Route path="/post/:id">
            <NewsDetail />
          </Route>
          <Route path="/:courseId/lesson/:id">
            <LessonDetail />
          </Route>
          <Route path="/auth/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/auth/verify">
            <Verify />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
