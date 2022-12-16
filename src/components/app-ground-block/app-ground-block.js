import React from 'react';
import './app-ground-block.css';
import h2Img from './h2img.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import mapFirst from './map1.jpg';
import mapSecond from './map2.jpg';
import modulFirstImg from './modul1.png';
import modulSecondImg from './modul2.png';
import carsImg from './car.png';
import closeImg from './close-btn.png';
import frameImg from './frameMini.png';
import frameImg2 from './frameDouble.png';
import frameImg3 from './frameModuleYchast.png';
import frameImg4 from './frame36.png';
import frameImg5 from './frame18.png';
import SimpleImageSlider from "react-simple-image-slider";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const images = [
    { url: "images/imgSlidePopupp/slideP1.jpg" },
    { url: "images/imgSlidePopupp/slideP2.jpg" },
    { url: "images/imgSlidePopupp/slideP3.jpg" }
];


function Ground() {
    return(
        <div className='groundInfoBlock'>
            <div className="firstBlockGround" id='ploshadki'>
                <h2> <img src={ h2Img } alt="Площадки" />Площадки</h2>  
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
                        <p className="paragTabName">
                            Алтуфьевское шоссе, вл. 79Ж
                        </p>
                        <div className="map-block">
                            <img src={ mapFirst } alt="Алтуфьевское шоссе, вл. 79Ж" />
                        </div>
                        <h3>Схема расположения модулей</h3>
                        <div className="block-modules d-flex">
                            <div className="modulFirst">
                            <Popup trigger={<button className='bigModul open16'>
                                    П1 <br />
                                    (30 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Двойной модуль <br /> с парковкой
                                                </h4>
                                                <p>от 30 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg2 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>



                                <span class="tooltiptext2">Двойной <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSecond">
                                
                            <Popup trigger={<button className='minModul open15'>
                                П2 <br />
                                (15 м<sup>2</sup>)
                            </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Мини модуль
                                                </h4>
                                                <p>от 13 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
         
                                <span class="tooltiptext">Мини <br /> модуль</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulThree">
                            <Popup trigger={<button className='bigModul open16'>
                                    П3 <br />
                                    (30 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Двойной модуль <br /> с парковкой
                                                </h4>
                                                <p>от 30 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg2 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext3">Двойной <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                        </div>
                        <img className='modulImgBlock' src={ modulFirstImg } alt="Схема расположения модулей" />
                    </TabPanel>
                    <TabPanel>
                        <p className="paragTabName">
                            Путевой проезд, д. 13с4
                        </p>
                        <div className="map-block">
                            <img src={ mapSecond } alt="Путевой проезд, д. 13с4" />
                        </div>
                        <h3>Схема расположения модулей</h3>
                        <div className="block-modules_second d-flex">
                            <div className="modulFirst_seven">
                            <Popup trigger={<button className='bigModul open16'>
                                    П7 <br />
                                    (30 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Двойной модуль <br /> с участком
                                                </h4>
                                                <p>от 30 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg3 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext4">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <button className='bigModul'>
                                    <img src={ carsImg } alt="" />
                                </button>
                            </div>
                            <div className="modulSecond">
                            <Popup trigger={<button className='minModul open16'>
                                    П8 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext5">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulThree">
                            <Popup trigger={<button className='bigModul open16'>
                                    П9 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Большой модуль <br /> с парковкой
                                                </h4>
                                                <p>от 34 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg4 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext6">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulFour">
                            <Popup trigger={<button className='bigModul open16'>
                                    П10 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Большой модуль <br /> с парковкой
                                                </h4>
                                                <p>от 34 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg4 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext7">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulFive">
                            <Popup trigger={<button className='bigModul open16'>
                                    П11 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Большой модуль <br /> с парковкой
                                                </h4>
                                                <p>от 34 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg4 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext8">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSix">
                            <Popup trigger={<button className='bigModul open16'>
                                    П12 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Большой модуль <br /> с парковкой
                                                </h4>
                                                <p>от 34 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg4 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext9">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>

                        </div>
                        <img className='modulImgBlock' src={ modulSecondImg } alt="Схема расположения модулей" />
                        <div className="block-modules_three d-flex">
                            <div className="modulFirst_seven sec0">
                            <Popup trigger={<button className='bigModul open16'>
                                    П6.1 <br />
                                    (30 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Двойной модуль <br /> с участком
                                                </h4>
                                                <p>от 32 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg3 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext10">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <button className='bigModul'>
                                    <img src={ carsImg } alt="" />
                                </button>
                            </div>
                            <div className="modulSecond sec1">
                            <Popup trigger={<button className='minModul open16'>
                                    П6 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext11">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec2">
                            <Popup trigger={<button className='minModul open16'>
                                    П5 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext12">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec3">
                            <Popup trigger={<button className='minModul open16'>
                                    П4 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext13">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec4">
                            <Popup trigger={<button className='minModul open16'>
                                    П3 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext14">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec5">
                            <Popup trigger={<button className='minModul open16'>
                                    П2 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext15">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec6">
                            <Popup trigger={<button className='minModul open16'>
                                    П1 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                                <SimpleImageSlider
                                                    useGPURender={true}
                                                    width={'375'}
                                                    height={'380'}
                                                    images={images}
                                                    showBullets={true}
                                                />
                                            </div>  
                                            <div className="infoBlockPopupp">
                                                <h4>
                                                    Одиночный модуль <br />
                                                </h4>
                                                <p>от 14 000 рулей <span className='dark'> в месяц</span></p>
                                                <div className="frameTextMini">
                                                    <img src={ frameImg5 } alt="1" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="aboutCallMe">
                                            <p>Для аренды звоните <br /> по телефону <a href="tel:+79265330740">+7 926 533 07 40</a></p>
                                        </div>
                            </Popup>
                                <span class="tooltiptext16">Одиночный <br /> модуль</span>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>   
        </div>
    );
}

export default Ground;