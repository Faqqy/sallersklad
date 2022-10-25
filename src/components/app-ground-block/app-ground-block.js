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
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "images/imgSlidePopupp/slideP1.jpg" },
    { url: "images/imgSlidePopupp/slideP2.jpg" },
    { url: "images/imgSlidePopupp/slideP3.jpg" }
];



document.addEventListener("DOMContentLoaded",() => {
  const the_button = document.querySelector(".block-modules button");
  the_button.addEventListener("click", handleClick);
});



function handleClick(event) {
  const the_button = document.querySelector(".block-modules button");
  const modal = document.querySelector(".modalMiniModule");
  const modalOver = document.querySelector(".moduleBlockModal");
  const closeBtn = document.querySelector(".close");
  const bodyStyle = document.body;
  modal.style.display = "block";
  modalOver.style.display = "block";
  the_button.style.backgroundColor = "#413C33";
  bodyStyle.style.overflow = "hidden";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    the_button.style.backgroundColor = "";
    bodyStyle.style.overflow = "";
  })
  event.stopPropagation();
}

document.addEventListener("click", (e) => {
    const modalOver = document.querySelector(".moduleBlockModal");
    const the_button = document.querySelector(".block-modules button");
    const modal = document.querySelector(".modalMiniModule");
    const bodyStyle = document.body;
    const click = e.composedPath().includes(modalOver);
        if(!click) {
            modalOver.style.display = "none";
            modal.style.display = "none";
            the_button.style.backgroundColor = "";
            bodyStyle.style.overflow = "";
        }
  });


function Ground() {
    return(
        <div className='groundInfoBlock'>
            <div className="firstBlockGround">
                <h2> <img src={ h2Img } alt="Площадки" />Площадки</h2>  
                <Tabs>
                    <TabList>
                    <Tab>
                        <h4>Площадка №1 </h4>
                        <p>Алтуфьевское шоссе, вл. 79Ж</p>
                    </Tab>
                    <Tab>
                        <h4>Площадка №2 </h4>
                        <p>Путевой проезд, д. 13с4</p>
                    </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="map-block">
                            <img src={ mapFirst } alt="Алтуфьевское шоссе, вл. 79Ж" />
                        </div>
                        <h3>Схема расположения модулей</h3>
                        <div className="block-modules d-flex">
                            <div className="modulFirst">
                                <button className='bigModul'>
                                    П1 <br />
                                    (30 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext2">Двойной <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSecond">
                                <button className='minModul'>
                                    П2 <br />
                                    (15 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext">Мини <br /> модуль</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulThree">
                                <button className='bigModul'>
                                    П3 <br />
                                    (30 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext3">Двойной <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                        </div>
                        <img className='modulImgBlock' src={ modulFirstImg } alt="Схема расположения модулей" />
                    </TabPanel>
                    <TabPanel>
                        <div className="map-block">
                            <img src={ mapSecond } alt="Алтуфьевское шоссе, вл. 79Ж" />
                        </div>
                        <h3>Схема расположения модулей</h3>
                        <div className="block-modules_second d-flex">
                            <div className="modulFirst_seven">
                                <button className='bigModul'>
                                    П7 <br />
                                    (30 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext4">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <button className='bigModul'>
                                    <img src={ carsImg } alt="" />
                                </button>
                            </div>
                            <div className="modulSecond">
                                <button className='minModul'>
                                    П8 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext5">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulThree">
                                <button className='bigModul'>
                                    П9 <br />
                                    (36 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext6">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulFour">
                                <button className='bigModul'>
                                    П10 <br />
                                    (36 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext7">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulFive">
                                <button className='bigModul'>
                                    П11 <br />
                                    (36 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext8">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSix">
                                <button className='bigModul'>
                                    П12 <br />
                                    (36 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext9">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>

                        </div>
                        <img className='modulImgBlock' src={ modulSecondImg } alt="Схема расположения модулей" />
                        <div className="block-modules_three d-flex">
                            <div className="modulFirst_seven sec0">
                                <button className='bigModul'>
                                    П6.1 <br />
                                    (30 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext10">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <button className='bigModul'>
                                    <img src={ carsImg } alt="" />
                                </button>
                            </div>
                            <div className="modulSecond sec1">
                                <button className='minModul' href="#">
                                    П6 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext11">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec2">
                                <button className='minModul'>
                                    П5 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext12">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec3">
                                <button className='minModul'>
                                    П4 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext13">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec4">
                                <button className='minModul'>
                                    П3 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext14">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec5">
                                <button className='minModul'>
                                    П2 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext15">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec6">
                                <button className='minModul'>
                                    П1 <br />
                                    (18 м<sup>2</sup>)
                                </button>
                                <span class="tooltiptext16">Одиночный <br /> модуль</span>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            
                <div className="modalMiniModule">
                    <div className="moduleBlockModal">
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

                    </div>           
                </div>
            

        
        </div>
    );
}

export default Ground;