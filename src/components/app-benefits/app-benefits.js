import React, {useState, useEffect} from 'react';
import './app-benefits.css';
import iconOk from './iconOk.png';

function Benefits() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    
    
    const [style, setDp] = useState("none");

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
            {!matches && (<span className='showHideLink' onClick={() => {setDp("flex");}}>Развернуть</span>)}
            {!matches && (<div className="flexItem" style={{ display: style }}>
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
            </div>)}
            {matches && (<div className="flexItem">
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
            </div>)}
        </div>
    );
}

export default Benefits;