import React from 'react';
import './app-benefits.css';
import iconOk from './iconOk.png';

function Benefits() {
    return (
        <div className='benefitsBlock'>
            <h3>Наши преимущества</h3>
            <div className="flexItem">
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Освещение территории"/> 
                        <p>Освещение территории</p>         
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Камеры наблюдения"/>
                        <p>Камеры наблюдения</p>
                    
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Вилочный погрузчик"/>
                        <p>Вилочный погрузчик</p>
                    
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Стеллажи для хранения"/>
                        <p>Стеллажи для хранения</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Модули с электричеством"/>
                        <p>Модули с электричеством</p>
                </div>
            </div>

            <div className="flexItem">
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Охраняемая территория с КПП"/>
                        <p>Охраняемая территория с КПП</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Проезд на своей машине"/>
                        <p>Проезд на своей машине</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Собственное место парковки"/>
                        <p>Собственное место парковки</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Санузел"/>
                        <p>Санузел</p>
                </div>
                <div className="bnefitsBlock_item">
                    <img src={ iconOk } alt="Круглосуточный доступ"/>
                        <p>Круглосуточный доступ</p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;