import React from 'react';
import '../../../css/services.css';
import { Container,Row,Col } from 'react-bootstrap';

function Services() {
  return (
    <section id="services" className="services">
      <Container className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>خدمات</h2><hr/>
          <p>خدمات ما را بررسی کنید</p>
        </div>
        <Row className="row">
          <Col className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">

          </Col>
          <Col className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">

          </Col>
          <Col className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">

          </Col>
          <Col className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">

          </Col>
          <Col className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">

          </Col>
          <Col className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;