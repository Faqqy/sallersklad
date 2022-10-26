import React from 'react';
import './app-cooperation.css';
import h2Img from './h2img.svg';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import imgUp from './buttonUp.png';


function Cooperation() {
    return(
        <div className="cooperation-block" id='coop'>
            <h2><img src={ h2Img } alt="Сотрудничество" />Сотрудничество</h2> 
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
            <div className='buttonBack' id='buttonBack'>
              <Link to="top" spy={true} smooth={true} duration={500}>
                <img src={ imgUp } alt="Наверх" />           
              </Link>
            </div>
        </div>

        
    );
}

export default Cooperation;

