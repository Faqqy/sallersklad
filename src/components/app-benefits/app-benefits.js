import React from 'react';
import './app-benefits.css';
import icon1 from './1icon.png';
import icon2 from './2icon.png';
import icon3 from './3icon.png';
import icon4 from './4icon.png';
import icon5 from './5icon.png';
import icon6 from './6icon.png';
import icon7 from './7icon.png';
import icon8 from './8icon.png';
import icon9 from './9icon.png';

function Benefits() {
    return (
        <div className='benefitsBlock'>
            <h3>Наши преимущества:</h3>
            <div className="flexItem">
                <div className="bnefitsBlock_item">
                    <img src={ icon1 } alt="Охраняемая территория с КПП"/> 
                        <p>Охраняемая территория с КПП</p>
                    
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ icon2 } alt="роезд на своей машине"/>
                        <p>Проезд на своей машине</p>
                    
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ icon3 } alt="Круглосуточный доступ"/>
                        <p>Круглосуточный доступ</p>
                    
                </div>
            </div>
            <div className="flexItem">
                <div className="bnefitsBlock_item">
                    <img src={ icon4 } alt="Собственное место парковки"/>
                        <p>Собственное место парковки</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ icon5 } alt="Вилочный погрузчик"/>
                        <p>Вилочный погрузчик</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ icon6 } alt="Санузел"/>
                        <p>Санузел</p>
                </div>
            </div>
            <div className="flexItem">
                <div className="bnefitsBlock_item">
                    <img src={ icon7 } alt="Стеллажи для хранения"/>
                        <p>Стеллажи для хранения</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ icon8 } alt="Освещение территории"/>
                        <p>Освещение территории</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ icon9 } alt="Модули с электричеством (кондиционер, обогрев, розетки)"/>
                        <p>Модули с электричеством (кондиционер, обогрев, розетки)</p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;