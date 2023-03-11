import React from 'react';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__links'>
                <li className='nav__link'>
                    <a href="/" className='nav__link-link'>Услуги</a>
                </li>
                <li className='nav__link'>
                    <a href="/" className='nav__link-link'>Виджеты</a>
                </li>
                <li className='nav__link'>
                    <a href="/" className='nav__link-link'>Интеграции</a>
                </li>
                <li className='nav__link'>
                    <a href="/" className='nav__link-link'>Кейсы</a>
                </li>
                <li className='nav__link nav__link-link_status_off'>
                    <a href="/" className='nav__link-link ' >Сертификаты</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;