import React from 'react';
import  './app-slider.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



const images = [
  { url: "images/imgslide/slide1.png" },
  { url: "images/imgslide/slide2.png" },
  { url: "images/imgslide/slide3.png" },
  { url: "images/imgslide/slide4.png" },
  { url: "images/imgslide/slide5.png" }
];


const SLide = () => {
  return (
    <div className='topBlockTwo'>
      
      <div className="rgbaSLiderBLock" id='top'>
              <div className="rgbaSLiderText">
                <h1>Модульные здания для бизнеса</h1>
                <p>Сдаем в аренду склады - офисы под хранение товаров для Вашего бизнеса</p>
                <Link className='buttonGrey' to="forms" spy={true} smooth={true} duration={500} offset={-217}>
                  Арендовать модуль           
                </Link>
              </div>
      </div>
      <div className="slider__block">

            <SimpleImageSlider
              useGPURender={true}
              width={'50%'}
              height={'825px'}
              images={images}
              showBullets={true}
              autoPlay={2000}
              slideDuration={0.7}
              showNavs={true}
              // showNavs={true}
            />
      </div>
        

    </div>
  );
}

export default SLide;