import React from 'react';
import '../../../css/about.css';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="about">
      <Container className="container aos-init aos-animate" data-aos="fade-up">
        <Row className="row rowAbout" id='row'>
          <Col xxl={6} xl={12} md={10}  className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <img className="img-fluid" alt=""></img>
          </Col>
          <Col xxl={6} xl={10} md={10}  className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate sirkat" data-aos="fade-right" data-aos-delay="100">
            <h3>شرکت دیجیتال کاسوکا</h3>
            <p className="style_p">
            شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.
            </p>
            <ul>
              <li><i className="ri-check-double-line"><IoCheckmarkDoneSharp /></i><span className="list_item"> ۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی</span></li>
              <li><i className="ri-check-double-line"><IoCheckmarkDoneSharp /></i><span className="list_item"> تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.</span></li>
              <li><i className="ri-check-double-line"><IoCheckmarkDoneSharp /></i><span className="list_item"> برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید</span></li>
            </ul>
            <p className='pKhedmat'>
              خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
