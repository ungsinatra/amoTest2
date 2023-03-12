import React from 'react';
import tg from '../images/socials/tg.svg'
import ph from '../images/socials/ph.svg'
import wh from '../images/socials/wh.svg'


const Footer = () => {
        return (
                <footer className='footer'>
                        <div className='footer__items'>
                                <div className='footer__about'>
                                <ul className='footer__about-lists'>
                                        <p className='footer__title'>О компании</p>
                                        <li className='footer__about-list'>
                                                <a href='/' className='footer__list-link'>Партнёрская программа</a>
                                        </li>
                                        <li className='footer__about-list'>
                                                <a href='/' className='footer__list-link'>Вакансии</a>
                                        </li>
                                </ul>   
                                </div>

                                <div className="footer__menu">
                                        <p className='footer__title'>Меню</p>
                                        <div className='footer__menu-items'>
                                                <ul className='footer__menu-lists'>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Расчёт стоимости</a>
                                                        </li>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Услуги</a>
                                                        </li>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Виджеты</a>
                                                        </li>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Интеграции</a>
                                                        </li>

                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Наши клиенты</a>
                                                        </li>
                                                      
                                                </ul>
                                                <ul className='footer__menu-lists '>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Кейсы</a>
                                                        </li>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Благодарственные письма</a>
                                                        </li>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Сертификаты</a>
                                                        </li>
                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Блог на Youtube</a>
                                                        </li>

                                                        <li className='footer__menu-list'>
                                                                <a href='/' className='footer__list-link'>Вопрос / Ответ</a>
                                                        </li>
                                                </ul>

                                        </div>


                                </div>


                                <div className='footer__contact'>
                                <ul className="footer__contact-lists">
                                        <p className='footer__title footer__title_use_rigth' >Контакты</p>
                                        <li className='footer__contact-list'>+7 555 555-55-55</li>
                                        <li className='footer__contact-list'>
                                                <img src={tg} className = 'footer__contact-list-ican'  alt="Telegram" />
                                                <img src={ph} className = 'footer__contact-list-ican' alt="Телефон" />
                                                <img src={wh} className = 'footer__contact-list-ican' alt="WhatsApp" />
                                        </li>
                                        <li className='footer__contact-list'>Москва, Путевой проезд 3с1, к 902</li>

                                </ul>
                                </div>
    
                        </div>
                        <div className='footer__texts' >
                        <p className='footer__text'>©WELBEX 2022. Все права защищены.</p>
                        <a href='/' className='footer__privacy-link'>Политика конфиденциальности</a>
                        </div>
                </footer>
        );
};

export default Footer;