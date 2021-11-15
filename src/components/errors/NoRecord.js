import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

function NoRecord() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Chúng tôi không tìm thấy bản ghi nào cả."
      extra={
        <Button type="primary">
          <Link to="/">Về trang chủ</Link>
        </Button>
      }
    />
  );
}

export default NoRecord;
