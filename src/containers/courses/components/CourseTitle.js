import React from 'react';
import 'containers/courses/CourseDetail.css';
import math from 'assets/images/math.png';

function CourseTitle(props) {
  if (!props.course) return null;

  const renderCoursesTitles = (course) => {
    return (
      <div className="wraper-left">
        <h3>{course.course_name}</h3>
      </div>
    );
  };
  return (
    <div className="course-title-box">
      <div className="wraper">
        {renderCoursesTitles(props.course)}
        <div className="wraper-right">
          <img src={math} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CourseTitle;
