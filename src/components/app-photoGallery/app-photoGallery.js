import React from 'react';
import './app-photoGallery.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import imgAl1 from './pl1-1.png';
import imgAl2 from './pl1-2.png';
import imgAl3 from './pl1-3.png';
import imgAl4 from './pl1-4.png';
import imgAl5 from './pl1-5.png';
import imgAl6 from './pl1-6.png';
import imgAl1big from './a1big.png';
import imgAl2big from './a2big.png';
import imgAl3big from './a3big.png';
import imgAl4big from './a4big.png';
import imgAl5big from './a5big.png';
import imgAl6big from './a6big.png';
import imgAl7 from './pl1-7.png';
import imgAl7big from './imgA17Big.jpg';
import imgAl8 from './pl1-8.png';
import imgAl8big from './a18big.png';
import imgAl9 from './pl1-9.png';
import imgAl9big from './a19big.png';
import imgAl10 from './pl1-10.png';
import imgAl10big from './a10big.png';
import imgAl11 from './pl1-11.png';
import imgAl11big from './a11big.png';
import imgAl12 from './pl1-12.png';
import imgAl12big from './a12big.png';
import h2Img from './h2img.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function PhotoGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="Gallery" id='photoGallery'>
            <h2> <img class="h2style" src={ h2Img } alt="Фотогалерея площадок" />Фотогалерея площадок</h2>
            <Tabs>
                <TabList>
                <Tab>
                    <h4>Площадка №1 </h4>
                </Tab>
                <Tab>
                    <h4>Площадка №2 </h4>
            
                </Tab>
                </TabList>
                <TabPanel>
                    <div className="GalleryBox">
                        <p className='paragTabNameMap'>
                            Путевой проезд, д. 13с4
                        </p>
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        >
                            <a href={ imgAl7big }>
                                <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgAl7 } />
                            </a>
                            <a href={ imgAl8big }>
                                <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgAl8 } />
                            </a>
                            <a href={ imgAl9big }>
                                <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgAl9 } />
                            </a>
                            <a href={ imgAl10big }>
                                <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgAl10 } />
                            </a>
                            <a href={ imgAl11big }>
                                <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgAl11 } />
                            </a>
                            <a href={ imgAl12big }>
                                <img alt="м. Алтуфьево, Путевой проезд, д. 13с4" src={ imgAl12 } />
                            </a>
                        </LightGallery>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="GalleryBox">
                        <p className='paragTabNameMap'>
                            Алтуфьевское шоссе, вл. 79Ж
                        </p>
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        numberOfSlideItemsInDom={3}
                        >
                            <a href={ imgAl1big }>
                                <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgAl1 } />
                            </a>
                            <a href={ imgAl2big }>
                                <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgAl2 } />
                            </a>
                            <a href={ imgAl3big }>
                                <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgAl3 } />
                            </a>
                            <a href={ imgAl4big }>
                                <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgAl4 } />
                            </a>
                            <a href={ imgAl5big }>
                                <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgAl5 } />
                            </a>
                            <a href={ imgAl6big }>
                                <img alt="м. Алтуфьево, Алтуфьевское шоссе, вл. 79Ж" src={ imgAl6 } />
                            </a>
                        </LightGallery>
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
}

export default PhotoGallery;