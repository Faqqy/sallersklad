import React from 'react';
import './app-ground-block.css';
import h2Img from './h2img.svg';
import Form from '../app-forms/app-forms';


function Ground() {
    return(
        <div className='groundInfoBlock'>
            <div className="firstBlockGround">
                <h2> <img src={ h2Img } alt="" />Площадки</h2>  
                
            </div>
            <div className="secondBLockForm">
                <h3>Для аренды и по остальным вопросам оставьте заявку</h3>
                <p>или позвоните по номеру <a href="tel:+79265330740">+7 926 533 07 40</a></p>
            { <Form/> }
            </div>
        </div>
    );
}

export default Ground;