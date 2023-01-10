import React from 'react';
import './app-cooperation.css';
import h2Img from './h2img.svg';
import { Link } from 'react-scroll';
import imgUp from './buttonUp.png';



function Cooperation() {
  const styleSpanTxt = {
    color: 'var(--hover-color)',
    fontSize: '23px'
  };
    return(
        <div className="cooperation-block" id='coop'>
            <h2><img src={ h2Img } alt="Сотрудничество" />Сотрудничество</h2>
            <span style={styleSpanTxt}>Мы открыты для взаимовыгодного сотрудничества!</span> 
            <p>Если у Вас есть пожелания или Вы хотите предложить землю для размещения модульных складов, пожалуйста, свяжитесь с нами по телефону: <br /> <span style={styleSpanTxt}>+7 985 150 06 06.</span></p> <br />
            <p>Будем рады обсудить интересные предожения для развития перспективного направления в бизнесе.</p>
            <div className='buttonBack' id='buttonBack'>
              <Link to="top" spy={true} smooth={true} duration={500}>
                <img src={ imgUp } alt="Наверх" />           
              </Link>
            </div>
        </div>

        
    );
}

export default Cooperation;

