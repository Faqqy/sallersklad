import React from 'react';
import './app-menu.css';
import { Link } from 'react-scroll'


function MainMenu() {
    return(
        <div className='main-menu'>
          <ul>
            <li>
              <Link id='about1' to="about" smooth={true} duration={300} offset={-65}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="ploshadki" smooth={true} duration={300} offset={-150}>
                Площадки
              </Link>
            </li>
            <li>
              <Link to="photoGallery" smooth={true} duration={300} offset={-150}>
                Фотогалерея
              </Link>
            </li>
            <li>
              <Link to="coop" smooth={true} duration={300} offset={-150}>
                Сотрудничество              
              </Link>
            </li>
          </ul>
        </div>
    );
}

export default MainMenu;