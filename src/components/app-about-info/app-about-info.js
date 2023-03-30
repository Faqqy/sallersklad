import React, {useState, useEffect} from 'react';
import './app-about-info.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import h2Img from './h2img.svg';
import itemImg1 from './firstphotop.png';
import itemImg2 from './firstphotop2.png';
import itemImg3 from './firstphotop3.png';
import iconOkImg from './iconOk.png';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import bginfo1 from './bginfo1.jpg';
import bginfo2 from './bginfo2.jpg';
import bginfo3 from './bginfo3.jpg';
import bginfo4 from './bginfo4.jpg';


function AboutInfo() {
    const styleSpanTxtInfo = {
        color: 'var(--hover-color)',
        fontSize: '30px'
      };
    const styleSpanTxtInfo2 = {
        color: 'var(--hover-color)',
        fontSize: '25px'
    };
    const styleSpanTxtInfo3 = {
      color: 'var(--main-color)',
      fontSize: '30px'
    };
    // const styleLi = {
    //     fontSize: '20px'
    // }

    // const [matches, setMatches] = useState(
    //     window.matchMedia("(min-width: 768px)").matches
    //   )
    
    //   useEffect(() => {
    //     window
    //     .matchMedia("(min-width: 768px)")
    //     .addEventListener('change', e => setMatches( e.matches ));
    //   }, []);
    
    
    // const [style, setDp] = useState("none");

    return(
        <div className='aboutInfoBlock' id='about'>
            <div className="first-block_aboutInfo">
                <h2> <img src={ h2Img } alt="" />О нас</h2>    
                <p>Мы предоставляем в аренду готовые функциональные помещения в сфере организации товарного бизнеса. <br />
Помещения создавались с учетом потребностей селлеров, и уже оборудованы всем необходимым. <br />
<span className='bigText'>Seller Sklad</span> – это эффективное решение для Вашего бизнеса!</p>
                {/* {!matches && (<span className='showHideLink' onClick={() => {setDp("block");}}>Развернуть</span>)}
                {!matches && (<div className="hiddenShowBlock" style={{ display: style }}>
                <span style={styleSpanTxtInfo2}>Мы предлагаем Вам:</span>
                <ul style={{listStyleType: 'disc',paddingLeft:'40px'}}>
                    <li style={styleLi}>облегчить ведение бизнеса и поиски подходящего помещения под него;</li>
                    <li style={styleLi}>доступность подъезда к складу на автомобиле и упрощение погрузки и выгрузки Вашего товара и вещей;</li>
                    <li style={styleLi}>удобное расположение модульных зданий в пределах Москвы и в пешей доступности от метро;</li>
                    <li style={styleLi}>круглосуточную охрану и видеонаблюдение на складах.</li>
                </ul>
                <br />
                <p>Наши склады - офисы это полноценные модульные здания с освещением, отоплением, стеллажами, и прочими удобствами, где Вы можете проводить свой рабочий день.</p>
                </div> )}
               
                {matches && (<div className="hiddenShowBlock">
                <span style={styleSpanTxtInfo2}>Мы предлагаем Вам:</span>
                <ul style={{listStyleType: 'disc',paddingLeft:'40px'}}>
                    <li style={styleLi}>облегчить ведение бизнеса и поиски подходящего помещения под него;</li>
                    <li style={styleLi}>доступность подъезда к складу на автомобиле и упрощение погрузки и выгрузки Вашего товара и вещей;</li>
                    <li style={styleLi}>удобное расположение модульных зданий в пределах Москвы и в пешей доступности от метро;</li>
                    <li style={styleLi}>круглосуточную охрану и видеонаблюдение на складах.</li>
                </ul>
                <br />
                <p>Наши склады - офисы это полноценные модульные здания с освещением, отоплением, стеллажами, и прочими удобствами, где Вы можете проводить свой рабочий день.</p>
                </div> )} */}
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
        </div> 
    );
}

export default AboutInfo;