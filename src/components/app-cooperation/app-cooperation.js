import React from 'react';
import './app-cooperation.css';
import h2Img from './h2img.svg';
import { Link } from 'react-scroll';
import imgUp from './buttonUp.png';



function Cooperation() {
    return(
        <div className="cooperation-block" id='coop'>
            <h2><img class="h2style" src={ h2Img } alt="Сотрудничество" />Сотрудничество с нами</h2>
            <span className="spanOrangeColor">Мы открыты для взаимовыгодного сотрудничества!</span> 
            <p>Если Вы хотите предложить площадку в Москве и МО под развитие складов модульного типа или развивать данное направление <br /> в партнерстве 
с нами, позвоните по телефону:<span className="spanOrangeColorPhone"><a href="tel:+79851500606">+7 985 150 06 06</a></span></p> <br />
            <div className='buttonBack' id='buttonBack'>
              <Link to="top" spy={true} smooth={true} duration={300} offset={-150}>
                <img src={ imgUp } alt="Наверх" />           
              </Link>
            </div>
        </div>

        
    );
}

export default Cooperation;

