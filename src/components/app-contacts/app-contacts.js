import React from 'react';
import './app-contacts.css';

function HeaderContacts() {
    return(
        <div className='main-contacts'>
            <ul>
                <li>
                    г. Москва <br />
                    <a href="tel:+79851500606">+ 7 985 150 06 06</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderContacts;