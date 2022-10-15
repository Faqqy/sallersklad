import React from 'react';
import './app-about-info.css';
import h2Img from './h2img.svg';
import itemImg from './foto-about.png';
import iconOkImg from './iconOk.png';
import Carousel from 'better-react-carousel';


function AboutInfo() {
    return(
        <div className='aboutInfoBlock'>
            <div className="first-block_aboutInfo">
                <h2> <img src={ h2Img } alt="" />О нас</h2>    
                <p>Аренда бытовок с земельным участком в нашей компании – выгодное сотрудничество, которое можно реализовать как на небольшой, так и длительный срок.</p>
                <p>Аренда бытовок с земельным участком в нашей компании – выгодное сотрудничество, которое можно реализовать как на небольшой, так и длительный срок.</p> 
            </div>
            <h3>Как можно использовать модуль?</h3>
            <div className="second-block_aboutInfo">
                
                <div className="second-block_aboutInfo-items">
                <Carousel
                    cols={3} 
                    rows={1} 
                    gap={10} 
                    loop={'true'}
                    hideArrow
                    >
                    <Carousel.Item>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg } alt="" />
                        <h4>Мини - офис</h4>
                        <p>Кчественные утепленные помещения с внутренней отделкой. В модулях подключено освещение, розетки, кондиционеры, установлены пластиковые окна и металлические двери под размер паллетов.</p>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg } alt="" />
                        <h4>Склад для магазина</h4>
                        <p>Удобное отапливаемое помещение для размещения ассортимента вашего магазина. Модули оснащены стеллажами по периметру. Двери выполнены из прочного металла.</p>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg } alt="" />
                        <h4>Хранение инвентаря и личных вещей</h4>
                        <p>Многофункциональный модуль для личного пользования. Прочные и надежные металлические двери, окна оснащены антивандальными решетками.</p>
                    </div>
                    </Carousel.Item>
                </Carousel>



                </div>
            </div>
            <h3>Что можно хранить в модулях?</h3>
            <Carousel
             cols={4} 
             rows={1} 
             gap={20} 
             loop={'true'}
             autoplay={2000}
             >
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide1.png" />
                    <p>Личные вещи</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide2.png" />
                    <p>Бытовая и офисная техника</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide3.png" />
                    <p>Некоторые продукты питания</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide4.png" />
                    <p>Автозапчасти, шины, диски</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide1.png" />
                    <p>Личные вещи</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide2.png" />
                    <p>Бытовая и офисная техника</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide3.png" />
                    <p>Некоторые продукты питания</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="images/imgSLideAbout/slide4.png" />
                    <p>Автозапчасти, шины, диски</p>
                </Carousel.Item>
            </Carousel>
        </div> 
    );
}

export default AboutInfo;