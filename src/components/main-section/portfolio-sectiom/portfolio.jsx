import React, { useState } from 'react';
import '../../../css/portfolio.css';
import PortfolioBox from './PortfolioBox';
import PortfolioBoxData from './PortfolioBoxData';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [courses, setCourses] = useState(PortfolioBoxData);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    if (filter === '*') {
      setCourses(PortfolioBoxData);
    } else {
      setCourses(PortfolioBoxData.filter((item) => item.p === filter));
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <Container className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>نمونه کارها</h2>
          <p>نمونه کارهای ما را بررسی کنید</p>
        </div>

        <Row className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <Col lg={12} className="d-flex justify-content-center" style={{ direction: "ltr" }}>
            <ul id="portfolio-flters">
              <li
                className={activeFilter === '*' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('*')}
              >
                همه
              </li>
              <li
                className={activeFilter === 'برنامه' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('برنامه')}
              >
                برنامه
              </li>
              <li
                className={activeFilter === 'محصول' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('محصول')}
              >
                محصول
              </li>
              <li
                className={activeFilter === 'اینترنت' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('اینترنت')}
              >
                اینترنت
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="roww portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" >

          {courses.map((course) => (
            <Col
              key={course.id}
              lg={4}
              md={6}
              className="portfolio-item"
            >
              <PortfolioBox
                img={course.img}
                IconeLink={course.IconeLink}
                IconPlus={course.IconPlus}
                h4={course.h4}
                p={course.p}
                filter={course.filter}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
