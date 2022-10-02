import React from 'react';
import  './app-slider.css';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "images/imgslide/slide1.png" },
  { url: "images/imgslide/slide2.png" },
  { url: "images/imgslide/slide3.png" },
  { url: "images/imgslide/slide4.png" },
  { url: "images/imgslide/slide5.png" }
];


const SLide = () => {
  return (
    <div>
      <div className="rgbaSLiderBLock">
        <div className="rgbaSLiderText">
          <h1>Модульные здания для бизнеса</h1>
          <p>Текст текст текст текст текст Текст текст текст текст текст текст Текст текст текст текст текст</p>
          <a href="#">Арендовать модуль</a>
        </div>
      </div>
      <SimpleImageSlider
        useGPURender={true}
        width={'100%'}
        height={'990px'}
        images={images}
        showBullets={true}
        // showNavs={true}
      />
    </div>
  );
}

export default SLide;