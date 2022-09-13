import React from 'react';
import './app-menu.css'

function MainMenu() {
    return(
        <div className='main-menu'>
          <ul>
            <li><a href="/">О нас</a></li>
            <li><a href="/">Площадки</a></li>
            <li><a href="/">Фотогалерея</a></li>
            <li><a href="/">Сотрудничество</a></li>
          </ul>
        </div>
    );
}

export default MainMenu;