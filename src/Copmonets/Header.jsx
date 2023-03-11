import Nav from './Nav';
import logo from '../images/logo_welbex.svg'
import tg from '../images/socials/tg.svg'
import ph from '../images/socials/ph.svg'
import wh from '../images/socials/wh.svg'


const Header = () => {

    return (
        <header className='header'>

            <img src={logo} className='header__logo' alt="Логотип шапки" />

            <div className='header__items'>
                <Nav />
                <div className='socials'>
                    <p className='socials__phone'>+7 555 555-55-55</p>
                    <ul className='socials__lists'>
                        <li className='socials__list'>
                            <img className='socials__list-ican' src={tg} alt="Иконка телеграмма" />
                        </li>
                        <li className='socials__list'>
                            <img className='socials__list-ican' src={ph} alt="Иконка телефона" />
                        </li>
                        <li className='socials__list'>
                            <img className='socials__list-ican' src={wh} alt="Иконка whatsapp" />
                        </li>

                    </ul>
                </div>

            </div>
            <p className='header__logo-subtext'>крупный интегратор CRM в Росcии и ещё 8 странах</p>

        </header>
    );

}

export default Header;