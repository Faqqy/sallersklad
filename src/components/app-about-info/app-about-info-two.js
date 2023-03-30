import React, {useState, useEffect} from 'react';
import './app-about-info.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';


function AboutInfo2() {
    return(
<div className="greyBlock">
    <Container>
        <Row>
            <Col>
            <h3>Как можно использовать <span style={{color:'var(--hover-color)'}}>помещение</span>?</h3>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    slidesPerView={1}
                    loop
                    navigation
                    style={{
                        "--swiper-pagination-color": "#413C33",
                        "--swiper-pagination-width": "10px",
                        "--swiper-pagination-bullet-inactive-color": "#fff",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "15px",
                        "--swiper-pagination-bullet-horizontal-gap": "20px",
                        "--swiper-navigation-color": "#C9C9C9",
                        "--swiper-navigation-size": "21px",
                    }}
                    breakpoints={{
                        "320": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        },
                        "768": {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        "@1.00": {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        },
                        "@1.50": {
                        slidesPerView: 1,
                        spaceBetween: 50,
                        },
                    }}
                    >
                    <SwiperSlide>
                    <div className="sliderFlex">
                        <div className="sliderFlexImg">
                        <img src="images/imgSLideAbout/sliderFlexPhoto1.png" alt="Интернет-магазин (мини-офис)" />
                        </div>
                        <div className="sliderFlexText">
                            <h4>
                                Интернет - магазин <br /> (мини - офис)
                            </h4>
                            <p>
                                Теплое помещение с качественной отделкой 
                                уже оборудовано всем необходимым 
                                для комфортной работы, включая рабочее место, освещение, розетки, окно, систему отопления 
                                и кондиционирования. 
                            </p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderFlex">
                        <div className="sliderFlexImg">
                        <img src="images/imgSLideAbout/sliderFlexPhoto2.png" alt="Интернет-магазин (мини-офис)" />
                        </div>
                        <div className="sliderFlexText">
                            <h4>
                                Товарный склад
                            </h4>
                            <p>
                                Конфигурация наших помещений позволяет 
                                с максимальной эффективностью организовать внутренние процессы Вашего товарного бизнеса 
                                и обеспечить удобные условия для работы.
                            </p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderFlex">
                        <div className="sliderFlexImg">
                        <img src="images/imgSLideAbout/sliderFlexPhoto3.png" alt="Интернет-магазин (мини-офис)" />
                        </div>
                        <div className="sliderFlexText">
                            <h4>
                                Личная кладовка
                            </h4>
                            <p>
                                В отличие от контейнера, гаража или балкона 
                                Ваши личные вещи будут храниться в сухом 
                                и прохладном месте под надежной защитой, 
                                а наличие стеллажей сделают Вашу кладовку максимально благоустроенной.
                            </p>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </Col>
        </Row>
    </Container>
</div>
    );
}
export default AboutInfo2;