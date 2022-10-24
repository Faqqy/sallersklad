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
                                <a className='bigModul' href="#">
                                    П1 <br />
                                    (30 м2)
                                </a>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSecond">
                                <a className='minModul' href="#">
                                    П2 <br />
                                    (15 м2)
                                </a>
                                <span class="tooltiptext">Мини <br /> модуль</span>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulThree">
                                <a className='bigModul' href="#">
                                    П3 <br />
                                    (30 м2)
                                </a>
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
                        <div className="block-modules d-flex">
                            <div className="modulFirst">
                                <a className='bigModul' href="#">
                                    П1 <br />
                                    (30 м2)
                                </a>
                                <img src={ carsImg } alt="" />
                            </div>
                            <div className="modulSecond">
                                <a className='minModul' href="#">
                                    П2 <br />
                                    (15 м2)
                                </a>
                                <span class="tooltiptext">Мини <br /> модуль</span>
                                <img src={ carsImg } alt="" />
                            </div>

                        </div>
                        <img className='modulImgBlock' src={ modulSecondImg } alt="Схема расположения модулей" />
                        <div className="modulThree">
                                <a className='bigModul' href="#">
                                    П3 <br />
                                    (30 м2)
                                </a>
                                <img src={ carsImg } alt="" />
                            </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default Ground;