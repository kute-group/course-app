import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import 'components/parts/courses/ClassList.css';

import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

// import internal libs

function ClassList() {
  return (
    <div className="class-list">
      <div className="wraper">
        <Row gutter={[20]}>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to={`/courses/12/category_id/ngoai-ngu`}>
                  <h3 className="class-text">Ngoại ngữ</h3>
                </Link>
              </div>
              <nav className="class-links">
                <Link
                  className="class-link"
                  to={`/courses/184/tag_id/tieng-anh`}
                >
                  Tiếng Anh
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/447/tag_id/tieng-trung`}
                >
                  Tiếng Trung
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/469/tag_id/tieng-nhat`}
                >
                  Tiếng Nhật
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/624/tag_id/tieng-han`}
                >
                  Tiếng Hàn
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/1976/tag_id/tieng-duc`}
                >
                  Tiếng Đức
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to={`/courses/9/category_id/marketing`}>
                  <h3 className="class-text">Marketing</h3>
                </Link>
              </div>
              <nav className="class-links">
                <Link
                  className="class-link"
                  to={`/courses/3/tag_id/facebook-marketing`}
                >
                  Facebook Marketing
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/21/tag_id/zalo-marketing`}
                >
                  Zalo marketing
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/56/tag_id/email-marketing`}
                >
                  Email Marketing
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/57/tag_id/marketing-online`}
                >
                  Marketing Online
                </Link>
                <Link className="class-link" to={`/courses/79/tag_id/seo`}>
                  Seo
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to={`/courses/1/category_id/cntt`}>
                  <h3 className="class-text">CNTT</h3>
                </Link>
              </div>
              <nav className="class-links">
                <Link
                  className="class-link"
                  to={`/courses/174/tag_id/ngon-ngu-lap-trinh`}
                >
                  Ngôn ngữ lập trình
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/211/tag_id/lap-trinh-web`}
                >
                  Lập Trình Web
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/685/tag_id/lap-trinh`}
                >
                  Lập trình
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/749/tag_id/lap-trinh-android`}
                >
                  Lập trình Android
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/16/category_id/tin-hoc-van-phong`}
                >
                  Tin học văn phòng
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={6} sm={6} xs={12} className="class-row">
            <div className="class-box">
              <div className="color-box">
                <Link to={`/courses/10/category_id/marketing`}>
                  <h3 className="class-text">Thiết kế</h3>
                </Link>
              </div>
              <nav className="class-links">
                <Link
                  className="class-link"
                  to={`/courses/62/tag_id/thiet-ke-web`}
                >
                  Thiết kế Web
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/380/tag_id/illustrator`}
                >
                  Illustrator
                </Link>
                <Link className="class-link" to={`/courses/384/tag_id/autocad`}>
                  Autocad
                </Link>
                <Link
                  className="class-link"
                  to={`/courses/517/tag_id/thiet-ke-quang-cao`}
                >
                  Thiết kế quảng cáo
                </Link>
                <Link className="class-link" to={`/courses/928/tag_id/3dsmax`}>
                  3DSMax
                </Link>
              </nav>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ClassList;
