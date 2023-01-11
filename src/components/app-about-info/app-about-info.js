import React, {useState, useEffect} from 'react';
import './app-about-info.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import h2Img from './h2img.svg';
import itemImg1 from './firstphotop.png';
import itemImg2 from './firstphotop2.png';
import itemImg3 from './firstphotop3.png';
import iconOkImg from './iconOk.png';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


function AboutInfo() {
    const styleSpanTxtInfo = {
        color: 'var(--hover-color)',
        fontSize: '35px'
      };
    const styleSpanTxtInfo2 = {
        color: 'var(--hover-color)',
        fontSize: '25px'
    };
    const styleLi = {
        fontSize: '20px'
    }

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    
    
    const [style, setDp] = useState("none");

    return(
        <div className='aboutInfoBlock' id='about'>
            <div className="first-block_aboutInfo">
                <h2> <img src={ h2Img } alt="" />О нас</h2>    
                <p>Аренда склада - офиса с земельным участком в нашей компании – выгодное сотрудничество, которое можно <br /> реализовать как на небольшой, так и длительный срок. Мы предоставляем оформление аренды на договорной <br /> основе с ежемесячной оплатой.</p>
                {!matches && (<span className='showHideLink' onClick={() => {setDp("block");}}>Развернуть</span>)}
                {!matches && (<div className="hiddenShowBlock" style={{ display: style }}>
                <span style={styleSpanTxtInfo2}>Мы предлагаем Вам:</span>
                <ul style={{listStyleType: 'disc',paddingLeft:'40px'}}>
                    <li style={styleLi}>облегчить ведение бизнеса и поиски подходящего помещения под него;</li>
                    <li style={styleLi}>доступность подъезда к складу на автомобиле и упрощение погрузки и выгрузки Вашего товара и вещей;</li>
                    <li style={styleLi}>удобное расположение модульных зданий в пределах Москвы и в пешей доступности от метро;</li>
                    <li style={styleLi}>круглосуточную охрану и видеонаблюдение на складах.</li>
                </ul>
                <br />
                <p>Наши склады - офисы это полноценные модульные здания с освещением, отоплением, стеллажами, и прочими удобствами, где Вы можете проводить свой рабочий день.</p>
                </div> )}
               
                {matches && (<div className="hiddenShowBlock">
                <span style={styleSpanTxtInfo2}>Мы предлагаем Вам:</span>
                <ul style={{listStyleType: 'disc',paddingLeft:'40px'}}>
                    <li style={styleLi}>облегчить ведение бизнеса и поиски подходящего помещения под него;</li>
                    <li style={styleLi}>доступность подъезда к складу на автомобиле и упрощение погрузки и выгрузки Вашего товара и вещей;</li>
                    <li style={styleLi}>удобное расположение модульных зданий в пределах Москвы и в пешей доступности от метро;</li>
                    <li style={styleLi}>круглосуточную охрану и видеонаблюдение на складах.</li>
                </ul>
                <br />
                <p>Наши склады - офисы это полноценные модульные здания с освещением, отоплением, стеллажами, и прочими удобствами, где Вы можете проводить свой рабочий день.</p>
                </div> )}
            </div>
            <h3>Как можно использовать <span style={styleSpanTxtInfo}>модуль?</span></h3>
            <div className="second-block_aboutInfo">
                
                <div className="second-block_aboutInfo-items">
                <Swiper

                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                <SwiperSlide>
                <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg1 } alt="" />
                        <h4>Мини - офис</h4>
                        <p>Кчественные утепленные помещения с внутренней отделкой. В модулях подключено освещение, розетки, кондиционеры, установлены пластиковые окна и металлические двери под размер паллетов.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg2 } alt="" />
                        <h4>Склад для магазина</h4>
                        <p>Удобное отапливаемое помещение для размещения ассортимента вашего магазина. Модули оснащены стеллажами по периметру. Двери выполнены из прочного металла.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg3 } alt="" />
                        <h4>Хранение инвентаря и личных вещей</h4>
                        <p>Многофункциональный модуль для личного пользования. Прочные и надежные металлические двери, окна оснащены антивандальными решетками.</p>
                    </div>
                </SwiperSlide>
            </Swiper>

                </div>
            </div>
            <h3>Что можно хранить в <span style={{color:'var(--hover-color)'}}>модулях</span>?</h3>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image1about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image2about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image3about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image4about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image5about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image6about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image7about.png" /></SwiperSlide>
                <SwiperSlide><img width="100%" src="images/imgSLideAbout/image8about.png" /></SwiperSlide>
            </Swiper>

        </div> 
    );
}

export default AboutInfo;