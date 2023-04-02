import React from 'react';
import './app-benefits.css';
import benef1 from './benif1.jpg';
import benef2 from './benif2.jpg';
import benef3 from './benif3.jpg';
import benef4 from './benif4.jpg';
import benef5 from './benif5.jpg';
import benef6 from './benif6.jpg';

function Benefits() {
    return (
        <div className='benefitsBlock'>
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
    );
}

export default Benefits;