import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import 'components/parts/ourteam/ListOurTeam.css';
import newsImg from 'assets/images/team.jpg';

import ourTeamBg from 'assets/images/big_cloud.png';
const { Header, Content, Footer } = Layout;

// import internal libs

function ListOurTeam() {
  return (
    <div
      className="list-our-team"
      style={{ backgroundImage: `url(${ourTeamBg})` }}
    >
      <div className="wraper wraper-list-our-team">
        <h3 className="list-our-team-title">Đội ngũ giáo viên</h3>
        <Row gutter={[20]}>
          <Col xl={6} sm={12} xs={24} className="our-team-row">
            <div className="our-team-box">
              <div className="image-box">
                <Link to="/#">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="our-team-title">
                  <Link to="/#">Cô Lê Thúy Vân</Link>
                </h3>
                <p className="our-team-office">
                  Giáo viên toán, Trường tiểu học Nam Thành Công
                </p>
                <p className="our-team-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT. Haha.edu.vn là trải nghiệm học tập tuyệt vời.
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời. Haha.edu.vn là
                  trải nghiệm học tập tuyệt vời
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={24} className="our-team-row">
            <div className="our-team-box">
              <div className="image-box">
                <Link to="/#">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="our-team-title">
                  <Link to="/#">Cô Lê Thúy Vân</Link>
                </h3>
                <p className="our-team-office">
                  Giáo viên toán, Trường tiểu học Nam Thành Công
                </p>
                <p className="our-team-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={24} className="our-team-row">
            <div className="our-team-box">
              <div className="image-box">
                <Link to="/#">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="our-team-title">
                  <Link to="/#">Cô Lê Thúy Vân</Link>
                </h3>
                <p className="our-team-office">
                  Giáo viên toán, Trường tiểu học Nam Thành Công
                </p>
                <p className="our-team-description">
                  Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                  khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12} xs={24} className="our-team-row">
            <div className="our-team-box">
              <div className="image-box">
                <Link to="/#">
                  <img src={newsImg} alt="" />
                </Link>
              </div>
              <div className="box-text">
                <h3 className="our-team-title">
                  <Link to="/#">Cô Lê Thúy Vân</Link>
                </h3>
                <p className="our-team-office">
                  Giáo viên toán, Trường tiểu học Nam Thành Công
                </p>
                <p className="our-team-description">
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

export default ListOurTeam;
