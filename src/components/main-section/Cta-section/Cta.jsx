import React from 'react';
import '../../../css/cta.css';
import { Container } from 'react-bootstrap';

function Cta() {
  return (
    <section id="cta" className="cta">
      <Container className="container aos-init aos-animate" data-aos="zoom-in">
        <div className="text-center">
          <h3>فراخوانی برای اقدام</h3>
          <p> اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.</p>
          <a className="cta-btn" href="#">فراخوانی برای اقدام</a>
        </div>
      </Container>
    </section>
  );
}

export default Cta;