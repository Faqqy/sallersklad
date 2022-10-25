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





document.addEventListener("DOMContentLoaded",() => {
  const the_button = document.querySelector(".block-modules span");
  the_button.addEventListener("click", handleClick);
});

document.addEventListener("click", (e) => {
    const modalOver = document.querySelector(".moduleBlockModal");
    const the_button = document.querySelector(".block-modules span");
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

function handleClick(event) {
  const the_button = document.querySelector(".block-modules span");
  const modal = document.querySelector(".modalMiniModule");
  const modalOver = document.querySelector(".moduleBlockModal");
  const closeBtn = document.querySelector(".close");
  const bodyStyle = document.body;
  modal.style.display = "block";
  modalOver.style.display = "block";
  the_button.style.backgroundColor = "var(--main-color)";
  bodyStyle.style.overflow = "hidden";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    the_button.style.backgroundColor = "";
    bodyStyle.style.overflow = "";
  })
  event.stopPropagation();
}


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
                                <span className='bigModul' href="">
                                    П1 <br />
                                    (30 м<sup>2</sup>)
                                </span>
                                <span class="tooltiptext2">Двойной <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSecond">
                                <a className='minModul' href="#">
                                    П2 <br />
                                    (15 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext">Мини <br /> модуль</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulThree">
                                <a className='bigModul' href="#">
                                    П3 <br />
                                    (30 м<sup>2</sup>)
                                </a>
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
                                <a className='bigModul' href="#">
                                    П7 <br />
                                    (30 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext4">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <a className='bigModul' href="#">
                                    <img src={ carsImg } alt="" />
                                </a>
                            </div>
                            <div className="modulSecond">
                                <a className='minModul' href="#">
                                    П8 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext5">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulThree">
                                <a className='bigModul' href="#">
                                    П9 <br />
                                    (36 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext6">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulFour">
                                <a className='bigModul' href="#">
                                    П10 <br />
                                    (36 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext7">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulFive">
                                <a className='bigModul' href="#">
                                    П11 <br />
                                    (36 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext8">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSix">
                                <a className='bigModul' href="#">
                                    П12 <br />
                                    (36 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext9">Большой <br /> модуль <br /> с парковкой</span>
                                <img src={ carsImg } alt="" />
                            </div>

                        </div>
                        <img className='modulImgBlock' src={ modulSecondImg } alt="Схема расположения модулей" />
                        <div className="block-modules_three d-flex">
                            <div className="modulFirst_seven sec0">
                                <a className='bigModul' href="#">
                                    П6.1 <br />
                                    (30 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext10">Двойной <br /> модуль <br /> с участком</span>
                            </div>
                            <div className="modulDash">
                                <a className='bigModul' href="#">
                                    <img src={ carsImg } alt="" />
                                </a>
                            </div>
                            <div className="modulSecond sec1">
                                <a className='minModul' href="#">
                                    П6 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext11">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec2">
                                <a className='minModul' href="#">
                                    П5 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext12">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec3">
                                <a className='minModul' href="#">
                                    П4 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext13">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec4">
                                <a className='minModul' href="#">
                                    П3 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext14">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec5">
                                <a className='minModul' href="#">
                                    П2 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext15">Одиночный <br /> модуль</span>
                            </div>
                            <div className="modulSecond sec6">
                                <a className='minModul' href="#">
                                    П1 <br />
                                    (18 м<sup>2</sup>)
                                </a>
                                <span class="tooltiptext16">Одиночный <br /> модуль</span>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            
                <div className="modalMiniModule">
                    <div className="moduleBlockModal">
                        <span className='close' href="#">1231</span>   
                    </div>           
                </div>
            

        
        </div>
    );
}

export default Ground;