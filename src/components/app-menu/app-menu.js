import React from 'react';
import './app-menu.css';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function MainMenu() {
    return(
        <div className='main-menu'>
          <ul>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500} offset={-50}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="ploshadki" spy={true} smooth={true} duration={500} offset={-150}>
                Площадки
              </Link>
            </li>
            <li>
              <Link to="photoGallery" spy={true} smooth={true} duration={500} offset={-150}>
                Фотогалерея
              </Link>
            </li>
            <li>
              <Link to="coop" spy={true} smooth={true} duration={500} offset={-150}>
                Сотрудничество              
              </Link>
            </li>
          </ul>
        </div>
    );
}

export default MainMenu;