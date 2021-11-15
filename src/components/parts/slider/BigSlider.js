import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Carousel } from 'antd';

// import internal libs
import 'components/parts/slider/BigSlider.css';
import bannerA from 'assets/images/banner3.png';
import bannerB from 'assets/images/bannerB.jpg';

function BigSlider() {
  return (
    <div className="big-slider">
      <Carousel autoplay dotPosition="right">
        <div className="slide">
          <img src={bannerA} />
        </div>
        <div className="slide">
          <img src={bannerB} />
        </div>
      </Carousel>
    </div>
  );
}

export default BigSlider;
