import React from 'react';
import './app-ground-block.css';
import h2Img from './h2img.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



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
                    <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
}

export default Ground;