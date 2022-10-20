import React from 'react';
import './app-photoGallery.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import imgGal from './photogal1.png';
import h2Img from './h2img.svg';



function PhotoGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="Gallery">
            <h2> <img src={ h2Img } alt="Фотогалерея площадок" />Фотогалерея площадок</h2> 
            <div className="GalleryBox">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <a href={ imgGal }>
                        <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgGal } />
                        <p>
                            м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж 
                        </p>
                    </a>
                    <a href={ imgGal }>
                        <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgGal } />
                        <p>
                            м. Алтуфьево, Путевой проезд, д. 13с4
                        </p>
                    </a>
                </LightGallery>
            </div>
        </div>
    );
}

export default PhotoGallery;