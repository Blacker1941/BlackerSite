import React from 'react';
import './hero.css';
import { SvgIcon2,SvgIcon3,SvgIcon4,SvgIcon5,SvgIcon6} from '../svg/SvgIcone';

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8" style={{width: "50%"}}>
          <h1>راه حل های قدرتمند دیجیتال با<br/><span>Parsa Farivash</span></h1>
          <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
        </div>
      </div>
      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"><SvgIcon2></SvgIcon2></i>
            <h3><a href="">متن نمایشی</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line"><SvgIcon3></SvgIcon3></i>
            <h3><a href="">نمودار کیفی</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line"><SvgIcon4></SvgIcon4></i>
            <h3><a href="">نمونه کارها</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-paint-brush-line"><SvgIcon5></SvgIcon5></i>
            <h3><a href="">عملکرد های پایانی</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-database-2-line"><SvgIcon6></SvgIcon6></i>
            <h3><a href="">اطلاعات ذخیره شده</a></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;