import React from 'react';
import './app-about-info.css';
import h2Img from './h2img.svg';
import itemImg from './foto-about.png';
import iconOkImg from './iconOk.png';
import { Carousel } from '@trendyol-js/react-carousel';



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
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg } alt="" />
                        <h4>Мини - офис</h4>
                        <p>Кчественные утепленные помещения с внутренней отделкой. В модулях подключено освещение, розетки, кондиционеры, установлены пластиковые окна и металлические двери под размер паллетов.</p>
                    </div>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg } alt="" />
                        <h4>Склад для магазина</h4>
                        <p>Удобное отапливаемое помещение для размещения ассортимента вашего магазина. Модули оснащены стеллажами по периметру. Двери выполнены из прочного металла.</p>
                    </div>
                    <div className="second-block_aboutInfo-item">
                        <img className='iconOk' src={ iconOkImg } alt="" />
                        <img src={ itemImg } alt="" />
                        <h4>Хранение инвентаря и личных вещей</h4>
                        <p>Многофункциональный модуль для личного пользования. Прочные и надежные металлические двери, окна оснащены антивандальными решетками.</p>
                    </div>
                </div>
            </div>
            <h3>Что можно хранить в модулях?</h3>
            <Carousel show={3} slide={2} transition={0.5}>
                We love Trendyol orange
                We love Trendyol orange
                We love Trendyol orange
                We love Trendyol orange
            </Carousel>
        </div> 
    );
}

export default AboutInfo;