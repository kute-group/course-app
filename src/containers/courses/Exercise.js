import { Button, Col, Input, Layout, Pagination, Rate, Row, Tabs } from 'antd';
import img2 from 'assets/images/img2.png';
import AppBreadCrumb from 'components/parts/breadcrumb/AppBreadCrumb';
import AppFooter from 'components/parts/footer/AppFooter';
import AppHeader from 'components/parts/header/AppHeader';
import 'containers/courses/Exercise.css';
import React, { useState } from 'react';

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;

// import internal libs

function Excercise() {
  const [size, setSize] = useState('large');
  return (
    <Layout className="main-app">
      <AppHeader />
      <Content className="app-content">
        <AppBreadCrumb />
        <div className="wraper1">
          <Row gutter={[20, 30]}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="wraper">
                <div className="excercise-container">
                  <h3 className="title-excercise">
                    Toán 1 - Nhiều hơn, ít hơn
                  </h3>
                  <div className="excercise">
                    <div className="excercise-question">
                      <div className="note-spring"></div>
                      <div className="list-question">
                        <div className="question-stt">
                          <h4>Câu 1</h4>
                        </div>
                        <div className="question-play text-center">
                          <Button type="text">
                            <i className="fa fa-play" aria-hidden="true"></i>
                          </Button>
                        </div>
                        <div className="question question-content">
                          <p>
                            <img src={img2} alt="" />
                          </p>
                          <p>Số chiếc áo ít hơn số chiếc quần. Đúng hay sai?</p>
                        </div>
                        <div className="answer">
                          <form>
                            <div className="style-custom-label answerselected">
                              <i
                                className="fa fa-check custom-style"
                                aria-hidden="true"
                              ></i>
                              <span>Đúng</span>
                            </div>
                            <div className="style-custom-label answerselected">
                              <i
                                className="fa fa-times custom-style"
                                aria-hidden="true"
                              ></i>
                              <span>Sai</span>
                            </div>
                          </form>
                        </div>
                        <div className="btn-btn-send-question text-center">
                          <button type="button" className="submit-big">
                            Gửi câu trả lời
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="tab-question">
                        <ul>
                          <li className="active-excercise">
                            <Button
                              type="text"
                              className="btn-excercise "
                              iconsize={size}
                            >
                              1
                            </Button>
                          </li>
                          <li>
                            <Button
                              type="text"
                              className="btn-excercise"
                              iconsize={size}
                            >
                              2
                            </Button>
                          </li>
                          <li>
                            <Button
                              type="text"
                              className="btn-excercise"
                              iconsize={size}
                            >
                              3
                            </Button>
                          </li>
                          <li>
                            <Button
                              type="text"
                              className="btn-excercise"
                              iconsize={size}
                            >
                              4
                            </Button>
                          </li>
                          <li>
                            <Button
                              type="text"
                              className="btn-excercise"
                              iconsize={size}
                            >
                              5
                            </Button>
                          </li>
                          <li>
                            <Button
                              type="text"
                              className="btn-excercise"
                              iconsize={size}
                            >
                              6
                            </Button>
                          </li>
                        </ul>
                      </div>
                      <div className="right-tray-question">
                        <ul>
                          <li className="question-mark">
                            <div className="question-hidden">
                              <h4>Câu hỏi số 1</h4>
                              <p className="proportion">1/5</p>
                            </div>
                            <div className="question-point">
                              <h4>Điểm</h4>
                              <div>
                                <p className="mark">0</p>
                                <p className="proportion">/</p>
                                <p className="mark">5</p>
                              </div>
                            </div>
                          </li>
                          <li className="light">
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                          </li>
                          <li className="light">
                            <i className="fa fa-print" aria-hidden="true"></i>
                          </li>
                          <li className="light">
                            <i
                              className="fa fa-question-circle-o"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="excercise-comment">
                    <div className="list-question-comment">
                      <h2 className="title">Đánh giá ôn tập </h2>
                      <div className="rating">
                        <div className="star-rating">
                          <Rate className="rate-antd" defaultValue={4} />
                        </div>
                        <div className="rating-result">
                          <span className="average">4.1</span> {'|'}{' '}
                          <span className="number">118</span>{' '}
                          <strong> đánh giá</strong>
                        </div>
                      </div>
                      <div className="insite-comments">
                        <div className="section-title-comment">Bình luận</div>
                        <ul className="list-comments">
                          <li>
                            <div className="comment-icon">
                              <i
                                className="fa fa-user-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="comment-meta">
                              <div className="comment-date">
                                03/04/2021 10:23
                              </div>
                              <div className="comment-name">012345678</div>
                              <div className="comment-content">
                                Bài giảng rất hay
                              </div>
                              <div className="comment-rating">
                                <Rate allowHalf defaultValue={2} />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment-icon">
                              <i
                                className="fa fa-user-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="comment-meta">
                              <div className="comment-date">
                                03/04/2021 00:00
                              </div>
                              <div className="comment-name">012345678</div>
                              <div className="comment-content">
                                Bài giảng rất hay
                              </div>
                              <div className="comment-rating">
                                <Rate allowHalf defaultValue={5} />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment-icon">
                              <i
                                className="fa fa-user-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="comment-meta">
                              <div className="comment-date">
                                03/04/2021 10:23
                              </div>
                              <div className="comment-name">012345678</div>
                              <div className="comment-content">
                                Bài giảng rất hay
                              </div>
                              <div className="comment-rating">
                                <Rate allowHalf defaultValue={4} />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment-icon">
                              <i
                                className="fa fa-user-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="comment-meta">
                              <div className="comment-date">
                                03/04/2021 10:23
                              </div>
                              <div className="comment-name">012345678</div>
                              <div className="comment-content">
                                Bài giảng rất hay
                              </div>
                              <div className="comment-rating">
                                <Rate allowHalf defaultValue={1} />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment-icon">
                              <i
                                className="fa fa-user-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="comment-meta">
                              <div className="comment-date">
                                03/04/2021 10:23
                              </div>
                              <div className="comment-name">012345678</div>
                              <div className="comment-content">
                                Bài giảng rất hay
                              </div>
                              <div className="comment-rating">
                                <Rate allowHalf defaultValue={2.5} />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment-icon">
                              <i
                                className="fa fa-user-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="comment-meta">
                              <div className="comment-date">
                                03/04/2021 10:23
                              </div>
                              <div className="comment-name">012345678</div>
                              <div className="comment-content">
                                Bài giảng rất hay
                              </div>
                              <div className="comment-rating">
                                <Rate allowHalf defaultValue={2} />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Pagination
                        defaultCurrent={1}
                        total={50}
                        className="comment-content-pagination text-center"
                      />

                      <div className="exercise-comment-label">
                        <Input
                          placeholder="Nhập họ tên"
                          size="large"
                          className="input-user-comment"
                        />

                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        ></i>
                        <TextArea
                          rows={4}
                          className="input-user-comment"
                          placeholder="Nhập nội dung bình luận"
                        />
                      </div>
                      <div className="btn-exercise text-center">
                        <Button className="button-send-info ">
                          <div className="css-fix-icon-send">
                            <i
                              className="fa fa-paper-plane icon-user-send"
                              aria-hidden="true"
                            ></i>
                            <span>Gửi đi</span>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Excercise;
