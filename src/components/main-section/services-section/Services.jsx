import React, { useState } from 'react';
import '../../../css/services.css';
import { Container, Row, Col } from 'react-bootstrap';
import serviceBoxData from './servicesBoxData';
import ServicesBox from './servicesBox';

function Services() {
  const [courses] = useState(serviceBoxData);

  return (
    <section id="services" className="services">
      <Container className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>خدمات</h2>
          <p>خدمات ما را بررسی کنید</p>
        </div>
        <Row className="row">
  {courses.map((course) => (
    <Col
      key={course.id}
      lg={4}
      md={6}
      className="d-flex align-items-stretch aos-init aos-animate"
      data-aos="zoom-in"
      data-aos-delay="100"
      style={ [4, 5, 6].includes(course.id) ? { marginTop: '24px' } : {} }
    >
      <ServicesBox
        Icon={course.Icon}
        A_Title={course.A_Title}
        title={course.title}
      />
    </Col>
  ))}
</Row>

      </Container>
    </section>
  );
}

export default Services;
