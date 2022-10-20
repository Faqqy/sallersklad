import React from 'react';
import './app-ground-block.css';
import h2Img from './h2img.svg';



function Ground() {
    return(
        <div className='groundInfoBlock'>
            <div className="firstBlockGround">
                <h2> <img src={ h2Img } alt="Площадки" />Площадки</h2>  
                
            </div>
        </div>
    );
}

export default Ground;