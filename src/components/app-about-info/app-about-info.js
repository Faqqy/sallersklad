import React from 'react';
import './app-about-info.css';
import styles from './styles.module.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import h2Img from './h2img.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import bginfo1 from './bginfo1.jpg';
import bginfo2 from './bginfo2.jpg';
import bginfo3 from './bginfo3.jpg';
import bginfo4 from './bginfo4.jpg';
import bginfoMob1 from './bg1mob.jpg';
import bginfoMob2 from './bg2mob.jpg';
import bginfoMob3 from './bg3mob.jpg';
import bginfoMob4 from './bg4mob.jpg';


function AboutInfo() {
    const styleSpanTxtInfo = {
        color: 'var(--hover-color)',
        fontSize: '30px'
      };
    const styleSpanTxtInfo3 = {
      color: 'var(--main-color)',
      fontSize: '30px'
    };

      /**
   * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
   */
    const AccordionItem = ({ header, ...rest }) => (
      <Item
        {...rest}
        header={
          <>
            {header}
            <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
          </>
        }
        className={styles.item}
        buttonProps={{
          className: ({ isEnter }) =>
            `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
      />
    );

    return(
        <div className='aboutInfoBlock' id='about'>
            <div className="first-block_aboutInfo">
                <h2> <img className="h2style" src={ h2Img } alt="" />О нас</h2>    
                <p>Мы предоставляем в аренду готовые функциональные помещения в сфере организации товарного бизнеса. <br />
Помещения создавались с учетом потребностей селлеров, и уже оборудованы всем необходимым. <br />
<span className='bigText'>Seller Sklad</span> – это эффективное решение для Вашего бизнеса!</p>
            </div>
            <h3 style={styleSpanTxtInfo}>Почему выбирают нас<span style={styleSpanTxtInfo3}>?</span></h3>
            <div className="second-block_aboutInfo">   
              <Tabs>
                  <div className="tabBlockLeft">
                    <TabList>
                      <Tab>
                          <h4>Удобство работы</h4>
                      </Tab>
                      <Tab>
                          <h4>Полное оснащение</h4>
              
                      </Tab>
                      <Tab>
                          <h4>Простота погрузки/выгрузки </h4>
                      </Tab>
                      <Tab>
                          <h4>Разнгообразие площадей</h4>
                      </Tab>
                    </TabList>
                  </div>
                  <div className="photoBlockRight">
                    <TabPanel>
                      <div className="bginfo1" style={{ backgroundImage: `url(${bginfo1})` }}>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="bginfo1" style={{ backgroundImage: `url(${bginfo2})` }}>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="bginfo1" style={{ backgroundImage: `url(${bginfo3})` }}>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="bginfo1" style={{ backgroundImage: `url(${bginfo4})` }}>
                      </div>
                    </TabPanel>
                  </div>
              </Tabs>
            </div>
            <div className="accordionMobile">
              <div className={styles.app}>
              <Accordion>
                <AccordionItem header="Удобство работы">
                  <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob1})` }}></div>
                </AccordionItem>

                <AccordionItem header="Полное оснащение">
                  <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob2})` }}></div>
                </AccordionItem>

                <AccordionItem header="Простота погрузки/выгрузки">
                  <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob3})` }}></div>
                </AccordionItem>

                <AccordionItem header="Разнгообразие площадей">
                  <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob4})` }}></div>
                </AccordionItem>
              </Accordion>
              </div>

            </div>
        </div> 
    );
}

export default AboutInfo;