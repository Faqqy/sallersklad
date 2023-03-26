import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  './app-slider.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import img1 from './slide1.png';
import img2 from './slide2.png';
import img3 from './slide3.png';
import img4 from './slide4.png';
import img5 from './slide5.png';


const SLide = () => {
  return (

    <div className='topBlockTwo'>
    
      <div className="rgbaSLiderBLock" id='top'>
              <div className="rgbaSLiderText">
              <Container>
                <h1>Аренда складских помещений <br />
                  для селлеров</h1>
                <p>Предоставляем в аренду функциональные помещения <br /> 
                    для ведения товарного бизнеса</p>
                <Link className='buttonGrey' to="forms" spy={true} smooth={true} duration={500} offset={-217}>
                  Связаться с нами           
                </Link>
                </Container>
              </div>  
      </div>

      <div className="slider__block">
        <Swiper

          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          style={{
            "--swiper-pagination-color": "#FF5C00",
            "--swiper-pagination-width": "5px",
            "--swiper-pagination-bullet-inactive-color": "#DEDFE2",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          }}
          breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
          <SwiperSlide>
            <div className="imgslide">
              <img src={ img1 } alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imgslide">
              <img src={ img2 } alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imgslide">
              <img src={ img3 } alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imgslide">
              <img src={ img4 } alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imgslide">
              <img src={ img5 } alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
    </div>

  );
}

export default SLide;