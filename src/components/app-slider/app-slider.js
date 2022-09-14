import React from 'react';

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