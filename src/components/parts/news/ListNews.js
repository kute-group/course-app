import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import 'components/parts/news/ListNews.css';
import newsImg from 'assets/images/news.jpg';
const { Header, Content, Footer } = Layout;

// import internal libs

function ListNews() {
  return (
    <div className="list-news">
      <div className="wraper wraper-list-news-index">
        <h3 className="list-news-title">Tin tức mới</h3>
        <Row gutter={[20]}>
          <Col xl={6} sm={12} xs={12} className="news-row">
            <div className="news-box">
              <div className="image-box">
                <Link to="/post/tai-sao-nen-di-hoc">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="news-title">
                  <Link to="/post/tai-sao-nen-di-hoc">
                    Giải mã 6 lý do giúp con bạn học giỏi tiếng anh năm học mới.
                    Giải mã 6 lý do giúp con bạn học giỏi tiếng anh năm học mới
                  </Link>
                </h3>
                <p className="news-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT. Giải mã 6 lý do giúp con bạn học giỏi tiếng anh năm học
                  mới
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={12} className="news-row">
            <div className="news-box">
              <div className="image-box">
                <Link to="/post/tai-sao-nen-di-hoc">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="news-title">
                  <Link to="/post/tai-sao-nen-di-hoc">
                    Giải mã 6 lý do giúp con bạn học giỏi tiếng anh năm học mới
                  </Link>
                </h3>
                <p className="news-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={12} className="news-row">
            <div className="news-box">
              <div className="image-box">
                <Link to="/post/tai-sao-nen-di-hoc">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="news-title">
                  <Link to="/post/tai-sao-nen-di-hoc">
                    Giải mã 6 lý do giúp con bạn học giỏi tiếng anh năm học mới
                  </Link>
                </h3>
                <p className="news-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={12} className="news-row">
            <div className="news-box">
              <div className="image-box">
                <Link to="/post/tai-sao-nen-di-hoc">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="news-title">
                  <Link to="/post/tai-sao-nen-di-hoc">
                    Giải mã 6 lý do giúp con bạn học giỏi tiếng anh năm học mới
                  </Link>
                </h3>
                <p className="news-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListNews;
