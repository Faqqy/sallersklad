import React from 'react';
import './app-contacts.css';

function FooterContacts() {
    return(
        <div className='footer-contacts'>
            <p className='styleOpasity'>
                Для заказа аренды модулей 
                и по остальным вопросам -
                звоните по телефону: 
            </p>
            <a href="tel:+79851500606">+7 985 150 06 06</a>
            <p>
                Ежедневно с 9:00 - 20:00
            </p>
        </div>
    );
}

export default FooterContacts;