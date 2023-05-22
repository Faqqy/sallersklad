import React from 'react';
import './app-benefits.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import benef1 from './benif1.jpg';
import benef2 from './benif2.jpg';
import benef3 from './benif3.jpg';
import benef4 from './benif4.jpg';
import benef5 from './benif5.jpg';
import benef6 from './benif6.jpg';
import mobcarus1 from './newmob1.jpg';
import mobcarus2 from './newmob2.jpg';
import mobcarus3 from './newmob3.jpg';
import mobcarus4 from './newmob4.jpg';
import mobcarus5 from './newmob5.jpg';
import mobcarus6 from './newmob6.jpg';

function Benefits() {
    return (
        <div className='benefitsBlock'>
            <div className="desktopVersion-benefitsBlock">
                <h3>У нас - сплошные <span style={{color:'var(--hover-color)'}}>преимущества!</span></h3>
                <div className="flexItem">
                    <div className="bnefitsBlock_item">
                        <img src={ benef1 } alt="Освещение территории"/>          
                    </div>
                    <div className="bnefitsBlock_itemText">
                        <h4>Освещаемая территория</h4>
                        <p>
                            Территория площадки полностью освещается в темное<br /> время суток. <br />
                            Над входом в каждое помещение дополнительно <br /> установлены индивидуальные прожекторы  
                        </p>
                    </div>
                </div>
                <div className="flexItem">
                    <div className="bnefitsBlock_itemText">
                        <h4>Круглосуточная охрана</h4>
                        <p>
                            На площадке действует служба охраны, въезд осуществляется через КПП, установлена система видеонаблюдения
                        </p>
                    </div>
                    <div className="bnefitsBlock_item">
                        <img src={ benef2 } alt="Круглосуточная охрана"/>          
                    </div>
                </div>
                <div className="flexItem">
                    <div className="bnefitsBlock_item">
                        <img src={ benef3 } alt="Собственная парковка и место для разгрузки"/>          
                    </div>
                    <div className="bnefitsBlock_itemText">
                        <h4>Собственная парковка и место для разгрузки</h4>
                        <p>
                            Собственная парковка, а также возможность подъезда грузового автомобиля прямо ко входу в помещение для удобной погрузки/выгрузки
                        </p>
                    </div>
                </div>
                <div className="flexItem">
                    <div className="bnefitsBlock_itemText">
                        <h4>Круглосуточный доступ</h4>
                        <p>
                            Все помещения в круглосуточном доступе (24/7)
                        </p>
                    </div>
                    <div className="bnefitsBlock_item">
                        <img src={ benef4 } alt="Круглосуточный доступ"/>          
                    </div>
                </div>
                <div className="flexItem">
                    <div className="bnefitsBlock_item">
                        <img src={ benef5 } alt="Готовые рабочие помещения"/>          
                    </div>
                    <div className="bnefitsBlock_itemText">
                        <h4>Готовые рабочие помещения</h4>
                        <p>
                            Все помещения оборудованы рабочим местом, стеллажами, системой отопления и кондиционирования
                        </p>
                    </div>
                </div>
                <div className="flexItem">
                    <div className="bnefitsBlock_itemText">
                        <h4>Вилочный автопогрузчик</h4>
                        <p>
                            На территории площадки имеется автопогрузчик для <br /> приема и отправки паллетных партий
                        </p>
                    </div>
                    <div className="bnefitsBlock_item">
                        <img src={ benef6 } alt="Вилочный автопогрузчик"/>          
                    </div>
                </div>
            </div>
            <div className="mobileVersion-benefitsBlock">
            <h3>У нас - сплошные <span style={{color:'var(--hover-color)'}}><br />преимущества!</span></h3>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1.5}
                    loop={true}
                    style={{

                        }}
                    >
                    <SwiperSlide>
                        <div className="slideItem">
                            <img src={ mobcarus1 } alt="" />
                            <h4>Освещаемая территория</h4>
                            <p>
                                Территория площадки полностью освещается в темное время суток.
                                Над входом в каждое помещение дополнительно установлены индивидуальные прожекторы  
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img src={ mobcarus2 } alt="" />
                            <h4>Круглосуточная охрана</h4>
                            <p>
                                На площадке действует служба охраны, въезд осуществляется через КПП, установлена система видеонаблюдения
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img src={ mobcarus3 } alt="" />
                            <h4>Собственная парковка
                                и место для разгрузки</h4>
                            <p>
                                Собственная парковка, а также возможность подъезда грузового автомобиля прямо
                                ко входу в помещение для удобной погрузки/выгрузки
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img src={ mobcarus4 } alt="" />
                            <h4>Круглосуточный доступ</h4>
                            <p>
                                Все помещения
                                в круглосуточном доступе (24/7)
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img src={ mobcarus5 } alt="" />
                            <h4>Готовые рабочие помещения</h4>
                            <p>
                                Все помещения оборудованы рабочим местом, стеллажами, системой отопления
                                и кондиционирования
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img src={ mobcarus6 } alt="" />
                            <h4>Вилочный автопогрузчик</h4>
                            <p>
                                На территории площадки имеется автопогрузчик для приема и отправки паллетных партий
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Benefits;