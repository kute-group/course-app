import React, { useState } from 'react';
import {
  UserOutlined,
  PaperClipOutlined,
  FormOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import {
  Collapse,
  Input,
  Layout,
  Pagination,
  Rate,
  Select,
  Timeline,
  Button,
} from 'antd';
import { get } from 'lodash';
import free_icon from 'assets/images/free_icon.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Header, Content, Footer } = Layout;

// import internal libs
const { Panel } = Collapse;
function Curriculum(props) {
  const renderCurriculum = () => {
    const renderLessons = (chapter) => {
      const listLessonItems = get(props, 'course.lessons', []).filter(item => item.parent_id === chapter.id);

      const listLessons = listLessonItems.map((lesson, index) => {
        return (
          <Timeline.Item
            dot={lesson.isFree ? <img src={free_icon} /> : null}
            key={index}
            className="fix-css-timeline-icon"
          >
            <div className="review-box-timeline">
              <div className="review-box-timeline-left">
                <h3>{lesson.name}</h3>
              </div>
              {/* <div className="review-box-timeline-right">
                <Link
                  className="playvideo"
                  to={`/${props.course._id}/lesson/${lesson._id}`}
                >
                  <PlayCircleOutlined />
                </Link>
                <Link className="edit-course" to="/exercise/22">
                  <FormOutlined />
                </Link>
                <Link className="share" to="/link">
                  <PaperClipOutlined />
                </Link>
              </div> */}
            </div>
          </Timeline.Item>
        );
      });
      return <Timeline>{listLessons}</Timeline>;
    };
    const listCurriculums = get(props, 'course.lessons', []).filter(item => Number(item.parent_id) === 0);
    const renderCurriculums = listCurriculums.map((chapter, idx) => {
      return (
        <Panel
          header={<p className="text-panel">{chapter.name}</p>}
          key={idx}
          className="background-panel background-panel-border"
        >
          {renderLessons(chapter)}
        </Panel>
      );
    });
    return (
      <Collapse defaultActiveKey={['0']} expandIconPosition={'right'}>
        {renderCurriculums}
      </Collapse>
    );
  };
  return (
    <div className="curriculum-box" id="curriculum">
      <div className="wraper">
        <div className="curriculum-box-content">
          <div className="curriculum-box-left">
            <h3>Chương trình học</h3>
          </div>
          <div className="curriculum-box-right">
            <input type="text" className="" placeholder="Tìm kiếm bài học " />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div className="curriculum-box-collap">{renderCurriculum()}</div>
      </div>
    </div>
  );
}

export default Curriculum;
