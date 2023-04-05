import React, { useRef } from 'react';
import './app-ground-block.css';
import h2Img from './h2img.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import modulFirstImg from './modul1.png';
import modulSecondImg from './modul2.png';
import carsImg from './car.png';
import closeImg from './close-btn.png';
import frameImg from './frameMini.png';
import frameImg2 from './frameDouble.png';
import frameImg3 from './twoModulY4astok.png';
import frameImg4 from './frame36.png';
import frameImg5 from './frame18.png';
import mapOpenFirst from './mapFirst.png';
import mapOpenSecond from './mapSecond.png';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import imageDoubleModulY4astok from './twoModY4.png';
import imageDoubleModulY4astok1 from './twoModY41.png';
import imageDoubleModulY4astok2 from './twoModY42.png';
import imageOdino4Module from './odin3Module.png';
import imageOdino4Module1 from './odin3Module1.png';
import imageOdino4Module2 from './odin3Module2.png';
import imgageBigMudulForParking from './bigmodpark.png';
import imgageBigMudulForParking1 from './bigmodpark1.png';
import imgageBigMudulForParking2 from './bigmodpark2.png';
import imageTwoDPark from './twoMPark.png';
import imageTwoDPark1 from './twoMPark1.png';
import imageTwoDPark2 from './twoMPark2.png';
import imageMiniModule from './minimod.png';
import imageMiniModule1 from './minimod1.png';
import imageMiniModule2 from './minimod2.png';
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';

function Ground() {
  
    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    
    function OpenModalAbout() {
        const openInfoModal = document.querySelector('.textOpen');
        if (openInfoModal.getAttribute("show")=="true"){
            openInfoModal.setAttribute("show","false");
        } else {
            openInfoModal.setAttribute("show","true");
        }

        document.querySelector('.ground-block').addEventListener('click', e => {
            if (e.target.className === 'ground-block') {
                openInfoModal.setAttribute("show","false");
            }
        });
    };

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
                        <div className="map-block">
                        <div className="textOpen"><img src={ mapOpenFirst } alt="Путевой проезд, д. 13с4" /></div>
                            <YMaps>
                                <div>
                                    <p className='paragTabNameMap'>
                                        Путевой проезд, д. 13с4
                                    </p>
                                    <Map defaultState={{ center: [55.88728565832933,37.56954050727078], zoom: 18 }} width="100%" height="500px" >
                                    <ZoomControl options={{ float: "right" }} />
                                    <Placemark
                                    onClick={OpenModalAbout}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [55, 65],
                                        iconImageHref: './images/pin.svg',
                                    }}
                                    geometry={[55.88728565832933,37.56954050727078]} />
                                    </Map>
                                </div>
                            </YMaps>
                        </div>
                        <h3>Схема расположения модулей</h3>
                        <div className="scrollDivName">
                        <div className="block-modules_second d-flex">
                            <div className="modulFirst_seven">
                            <Popup ref={ref} trigger={<button className='bigModul open16'>
                                
                                    П7 <br />
                                    (30 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                closeOnEscape
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageDoubleModulY4astok } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageDoubleModulY4astok1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageDoubleModulY4astok2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                                <span class="tooltiptext4">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <button className='bigModul'>
                                    <img src={ carsImg } alt="" />
                                </button>
                            </div>
                            <div className="modulSecond">
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П8 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='bigModul open16'>
                                    П9 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='bigModul open16'>
                                    П10 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='bigModul open16'>
                                    П11 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='bigModul open16'>
                                    П12 <br />
                                    (36 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imgageBigMudulForParking } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='bigModul open16'>
                                    П6.1 <br />
                                    (30 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageDoubleModulY4astok } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageDoubleModulY4astok1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageDoubleModulY4astok2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П6 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П5 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П4 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П3 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П2 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <Popup ref={ref} trigger={<button className='minModul open16'>
                                    П1 <br />
                                    (18 м<sup>2</sup>)
                                </button>} 
                                modal
                                closeOnDocumentClick
                                lockScroll
                                >
                                        <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                        <div className="infoBlockImgText d-flex">
                                            <div className="carouselImgPopupp">
                                            <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageOdino4Module2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                            <div className="openVis1">
                                <div className='parkingToltip1'>Общая парковка</div>
                            </div>
                        </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="map-block">
                        <div className="textOpen"><img src={ mapOpenSecond } alt="Алтуфьевское шоссе, вл. 79Ж" /></div>
                            <YMaps>
                                <div>
                                    <p className='paragTabNameMap'>
                                        Алтуфьевское шоссе, вл. 79Ж
                                    </p>
                                    <Map defaultState={{ center: [55.887254008443186,37.58502191104509], zoom: 18 }} width="100%" height="500px" >
                                    <ZoomControl options={{ float: "right" }} />
                                    <Placemark
                                    onClick={OpenModalAbout}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [55, 65],
                                        iconImageHref: './images/pin.svg',
                                    }}
                                    geometry={[55.887254008443186,37.58502191104509]} />
                                    </Map>
                                </div>
                            </YMaps>
                        </div>
                        <h3>Схема расположения модулей</h3>
                        <div className="scrollDivName2">
                            <div className="block-modules d-flex">
                                <div className="modulFirst">
                                <Popup ref={ref} trigger={<button className='bigModul open16'>
                                        П1 <br />
                                        (30 м<sup>2</sup>)
                                    </button>} 
                                    modal
                                    closeOnDocumentClick
                                    lockScroll
                                    >
                                            <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                            <div className="infoBlockImgText d-flex">
                                                <div className="carouselImgPopupp">
                                                <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageTwoDPark } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageTwoDPark1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageTwoDPark2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                                    
                                <Popup ref={ref} trigger={<button className='minModul open15'>
                                    П2 <br />
                                    (15 м<sup>2</sup>)
                                </button>} 
                                    modal
                                    closeOnDocumentClick
                                    lockScroll
                                    >
                                            <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                            <div className="infoBlockImgText d-flex">
                                                <div className="carouselImgPopupp">
                                                <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageMiniModule } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageMiniModule1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageMiniModule2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                                <Popup ref={ref} trigger={<button className='bigModul open16'>
                                        П3 <br />
                                        (30 м<sup>2</sup>)
                                    </button>} 
                                    modal
                                    closeOnDocumentClick
                                    lockScroll
                                    >
                                            <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                                            <div className="infoBlockImgText d-flex">
                                                <div className="carouselImgPopupp">
                                                <Swiper
                                                modules={[Navigation, Pagination, A11y]}
                                                spaceBetween={100}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                style={{
                                                    "--swiper-pagination-color": "#413C33",
                                                    "--swiper-pagination-width": "20px",
                                                    "--swiper-pagination-bullet-inactive-color": "#fff",
                                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                                    "--swiper-pagination-bullet-size": "15px",
                                                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                                                  }}
                                                >
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageTwoDPark } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageTwoDPark1 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="firstSlide">
                                                        <img src={ imageTwoDPark2 } alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
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
                        <div className="openVis">
                            <div className='parkingToltip2'>Общая парковка</div>
                        </div>
                        
                        </div>
      
                    </TabPanel>
                </Tabs>
            </div>   
        </div>
    );

};



export default Ground;