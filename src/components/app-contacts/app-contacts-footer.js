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
            <a href="tel:+79265330740">+7 926 533 07 40</a>
            <p>
                Ежедневно с 9:00 - 20:00
            </p>
        </div>
    );
}

export default FooterContacts;