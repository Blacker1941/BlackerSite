import React ,{ useState } from 'react';
import '../../../css/counts.css';
import { Container, Row, Col , Image} from 'react-bootstrap';
import CountsBox from './CountsBox';
import CountsBoxData from './CountsBoxData';

function Counts() {
    const [courses] = useState(CountsBoxData);
  return (
    <section id="counts" className="counts">
      <Container className="container aos-init aos-animate" data-aos="fade-up">
        <Row className="row no-gutters">
          <Col xl={5}  className= "d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
          <Image className="imagecounts" />
          </Col>
          <Col xl={7} lg={5} className=" d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="content d-flex flex-column justify-content-center">
              <h3>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
              <p>
                خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
              <Row className="row">
                {courses.map((course) => (
                    <Col md={6} className=" d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <CountsBox Icon={course.Icon} number={course.number} p={course.p} strong={course.strong} />
                        </div>
                    </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Counts;
