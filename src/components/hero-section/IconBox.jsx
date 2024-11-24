import React from 'react';
import '../../css/hero.css';
import { Col } from 'react-bootstrap';

function IconBox({ title: ProductTitle, children }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
      <div className="icon-box">
        <i className="ri-store-line">{children}</i>
        <h3><a href="">{ProductTitle}</a></h3>
      </div>
    </Col>
  );
}

export default IconBox;
