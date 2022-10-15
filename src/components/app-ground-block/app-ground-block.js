import React from 'react';
import './app-ground-block.css';
import h2Img from './h2img.svg';
import Form from '../app-forms/app-forms';


function Ground() {
    return(
        <div className='groundInfoBlock'>
            <div className="firstBlockGround">
                <h2> <img src={ h2Img } alt="" />Площадки</h2>  
                { <Form/> }
            </div>
        </div>
    );
}

export default Ground;