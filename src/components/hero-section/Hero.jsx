import React from 'react';
import '../../css/hero.css';
import { RiStoreLine } from "react-icons/ri";
import { MdInsertChartOutlined } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiPaintBrushLine } from "react-icons/ri";
import { RiDatabase2Line } from "react-icons/ri";
import IconBox from './IconBox';
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  const allProducts = [
    {id: 1, title: "متن نمایشی"},
    {id: 2, title: "نمودار کیفی"},
    {id: 3, title: "نمونه کارها"},
    {id: 4, title: "عملکرد های پایانی"},
    {id: 5, title: "اطلاعات ذخیره شده"}
  ];

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <Container className="container" data-aos="fade-up">
        <Row className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <Col xl={6} lg={8} sm={12} xs={12} className="text-center">
            <h1>راه حل های قدرتمند دیجیتال با<br /><span>Parsa Farivash</span></h1>
            <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
          </Col>
        </Row>
        <Row className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <IconBox {...allProducts[0]}><RiStoreLine /></IconBox>
          <IconBox {...allProducts[1]}><MdInsertChartOutlined /></IconBox>
          <IconBox {...allProducts[2]}><RiCalendarTodoLine /></IconBox>
          <IconBox {...allProducts[3]}><RiPaintBrushLine /></IconBox>
          <IconBox {...allProducts[4]}><RiDatabase2Line /></IconBox>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
