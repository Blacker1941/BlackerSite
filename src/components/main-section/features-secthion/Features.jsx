import React from 'react';
import '../../../css/features.css';
import IconBox2 from './IconBox';
import { BiReceipt } from "react-icons/bi";
import { HiOutlineCube } from "react-icons/hi";
import { PiImages } from "react-icons/pi";
import { MdOutlineShield } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap';

function Features() {
    const allProducts = [
        {id: 1, title: "تبلیغ سختی است", p: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند "},
        {id: 2, title: "کدام یک از اینهاست", p: "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"},
        {id: 3, title: "یا کور شده است", p: "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"},
        {id: 4, title: "حقیقت مبارک", p: "آنها  بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"},
    ];

    return (
        <section className='features'>
            <Container className="container aos-init aos-animate" data-aos="fade-up">
                <Row className="row">

                    <Col xs={12} sm={12} md={12} lg={12} xl={6} className="image aos-init aos-animate divImage" data-aos="fade-right"></Col>


                    <Col xs={12} sm={6} md={12} lg={12} xl={5} className="col-lg-5 aos-init aos-animate divText" data-aos="fade-left" data-aos-delay="100">
                        <div className="icon-box mt-5 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
                            <IconBox2 {...allProducts[0]}><BiReceipt /></IconBox2>
                        </div>
                        <div className="icon-box mt-5 aos-init aos-animate Margin-5" data-aos="zoom-in" data-aos-delay="150">
                            <IconBox2 {...allProducts[1]}><HiOutlineCube /></IconBox2>
                        </div>
                        <div className="icon-box mt-5 aos-init aos-animate Margin-5" data-aos="zoom-in" data-aos-delay="150">
                            <IconBox2 {...allProducts[2]}><PiImages /></IconBox2>
                        </div>
                        <div className="icon-box mt-5 aos-init aos-animate Margin-5" data-aos="zoom-in" data-aos-delay="150">
                            <IconBox2 {...allProducts[3]}><MdOutlineShield /></IconBox2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Features;
