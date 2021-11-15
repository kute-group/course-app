import {
  Button,
  Collapse,
  Input,
  Layout,
  Pagination,
  Rate,
  Select,
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const { Header, Content, Footer } = Layout;

const { Panel } = Collapse;
const { Option } = Select;
const { TextArea } = Input;

function Review() {
  return (
    <div className="review-box">
      <div className="wraper">
        <div className="excercise-comment">
          <div className="list-question-comment">
            <h2 className="title">Đánh giá ôn tập </h2>
            <div className="rating">
              <div className="star-rating">
                <Rate className="rate-antd" defaultValue={4} />
              </div>
              <div className="rating-result">
                <span className="average">4.1</span> {'|'}{' '}
                <span className="number">118</span> <strong> đánh giá</strong>
              </div>
            </div>
            <div className="insite-comments">
              <div className="section-title-comment">Bình luận</div>
              <ul className="list-comments">
                <li>
                  <div className="comment-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="comment-meta">
                    <div className="comment-date">03/04/2021 10:23</div>
                    <div className="comment-name">012345678</div>
                    <div className="comment-content">Bài giảng rất hay</div>
                  </div>
                  <div className="comment-rating">
                    <Rate allowHalf defaultValue={2.5} />
                  </div>
                </li>
                <li>
                  <div className="comment-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="comment-meta">
                    <div className="comment-date">03/04/2021 00:00</div>
                    <div className="comment-name">012345678</div>
                    <div className="comment-content">Bài giảng rất hay</div>
                    <div className="comment-rating">
                      <Rate allowHalf defaultValue={2.5} />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="comment-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="comment-meta">
                    <div className="comment-date">03/04/2021 10:23</div>
                    <div className="comment-name">012345678</div>
                    <div className="comment-content">Bài giảng rất hay</div>
                    <div className="comment-rating">
                      <Rate allowHalf defaultValue={2.5} />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="comment-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="comment-meta">
                    <div className="comment-date">03/04/2021 10:23</div>
                    <div className="comment-name">012345678</div>
                    <div className="comment-content">Bài giảng rất hay</div>
                    <div className="comment-rating">
                      <Rate allowHalf defaultValue={2.5} />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="comment-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="comment-meta">
                    <div className="comment-date">03/04/2021 10:23</div>
                    <div className="comment-name">012345678</div>
                    <div className="comment-content">Bài giảng rất hay</div>
                    <div className="comment-rating">
                      <Rate allowHalf defaultValue={2.5} />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="comment-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="comment-meta">
                    <div className="comment-date">03/04/2021 10:23</div>
                    <div className="comment-name">012345678</div>
                    <div className="comment-content">Bài giảng rất hay</div>
                    <div className="comment-rating">
                      <Rate allowHalf defaultValue={2.5} />
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
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>

              <TextArea
                rows={4}
                className="input-user-comment"
                placeholder="Nhập nội dung bình luận"
              />
            </div>

            <div className="send-comment text-center">
              <Button className="button-send-info">
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
  );
}

export default Review;
