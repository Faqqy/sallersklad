import React from 'react';
import './app-logo.css';
import logoImg from './logodesc.svg';

function Logo() {
    return(
        <div className='logo-img'>
            <a href="/">
                <img src={ logoImg } alt="Логотип" />
            </a>
        </div>
    );
}

export default Logo;