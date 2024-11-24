import React from 'react';
import '../../../css/clinets.css';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination , Autoplay} from 'swiper/modules';

function Clients() {
  return (
    <section className='clients'>
    <Swiper
  slidesPerView={1}
  spaceBetween={10}
  loop={true}
  loopAdditionalSlides={2}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
>
      <SwiperSlide className='swiperSlider' id='SS'><img className='citrus'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='lelly'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='lifeGroups'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='belmo'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='Myob'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='grabyo'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='oldendoff'/></SwiperSlide>
      <SwiperSlide className='swiperSlider'><img className='trustly'/></SwiperSlide>
    </Swiper>
  </section>
  );
}

export default Clients;
