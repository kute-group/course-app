import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
} from 'antd';
import { Link } from 'react-router-dom';
import 'components/parts/search/Search.css';
import searchBg from 'assets/images/bg-search.jpg';

import {
  UserAddOutlined,
  ContactsFilled,
  PieChartFilled,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailFilled,
  EditFilled,
  PhoneFilled,
  ArrowRightOutlined,
  CheckCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Option } = Select;

// import internal libs

function Search() {
  return (
    <div className="form-search-index">
      <div className="wraper wraper-form-search-index">
        <div
          className="main-form-search"
          style={{ backgroundImage: `url(${searchBg})` }}
        >
          <Row gutter={[20]}>
            <Col xl={4} sm={24} xs={24} className="search-row"></Col>
            <Col xl={4} sm={24} xs={24} className="search-row">
              <h4>Tìm bài giảng</h4>
            </Col>
            <Col xl={12} sm={24} xs={24} className="search-row">
              <Row gutter={[20]}>
                <Col xl={8} sm={24} xs={24}>
                  <div className="class-select">
                    <Select labelInValue defaultValue={{ value: 'Chọn lớp' }}>
                      <Option value="tienlop1">Tiền lớp 1</Option>
                      <Option value="lop1">Lớp 1</Option>
                      <Option value="lop2">Lớp 2</Option>
                      <Option value="lop3">Lớp 3</Option>
                      <Option value="lop4">Lớp 4</Option>
                      <Option value="lop5">Lớp 5</Option>
                    </Select>
                  </div>
                </Col>
                <Col xl={8} sm={24} xs={24}>
                  <div className="subjects-select">
                    <Select labelInValue defaultValue={{ value: 'Chọn môn' }}>
                      <Option value="chonmon">Chọn môn</Option>
                    </Select>
                  </div>
                </Col>
                <Col xl={8} sm={24} xs={24}>
                  <div className="button-search">
                    <Button type="primary" htmlType="submit">
                      <SearchOutlined /> Tìm kiếm
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={4} sm={24} xs={24} className="search-row"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Search;
