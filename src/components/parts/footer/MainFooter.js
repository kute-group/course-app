import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

// import internal libs

function MainFooter() {
  return (
    <div className="main-footer">
      <div className="wraper">
        <Row gutter={[20, 20]}>
          <Col xl={8} sm={12} xs={24}>
            <div className="footer-info">
              <h3>Về chúng tôi</h3>
              <p>
                Haha.edu.vn là trải nghiệm học tập tuyệt vời, cung cấp những
                khoá học online chất lượng cao cho học sinh tiểu học, THCS và
                THPT. Với sự hợp tác chuyên môn của các giáo viên giỏi, uy tín
                cùng với sự đầu tư chỉn chu về công nghệ đồ hoạ tạo các khoá học
                trực quan giàu hình ảnh giúp các em hào hứng say mê học, từ đó
                đạt kết quả cao trên lớp cũng như các kỳ thi.
              </p>
            </div>
          </Col>
          <Col xl={8} sm={12} xs={24}>
            <div className="footer-info">
              <h3>Thông tin</h3>
              <nav className="footer-links">
                <Link className="footer-link" to="#">
                  <ArrowRightOutlined /> Chính sách đặt hàng
                </Link>
                <Link className="footer-link" to="#">
                  <ArrowRightOutlined /> Chính sách vận chuyển
                </Link>
                <Link className="footer-link" to="#">
                  <ArrowRightOutlined /> Chính sách đổi trả
                </Link>
                <Link className="footer-link" to="#">
                  <ArrowRightOutlined /> Chính sách thanh toán
                </Link>
                <Link className="footer-link" to="#">
                  <ArrowRightOutlined /> Chính sách đặt hàng
                </Link>
                <Link className="footer-link" to="#">
                  <ArrowRightOutlined />
                  Chính sách đặt hàng
                </Link>
              </nav>
            </div>
          </Col>
          <Col xl={8} sm={12} xs={24}>
            <div className="footer-info">
              <h3>Link facebook</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainFooter;
