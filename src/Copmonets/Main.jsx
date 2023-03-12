import React from 'react';

const Main = () => {
    return (
        <main className='main'>
            <div className='red-ambient'></div>
            <div className='purple-ambient'></div>
            <div className='red-small-ball'></div>
            <div className='yellow__ambient'></div>
            <div className='glass'> </div>
            <div className='red-ball'></div>
            <div className='yellow-ball'></div>
            <div className='purple-ball'></div>
            <div className='red-ball2'></div>

            <div className='main__items'>
                <div className='main__item-rigth'>
                    <h1 className='main__title'>Зарабатывайте больше</h1>
                    <p className='main__subtitle'>
                        с WELBEX
                    </p>
                    <p className='main__text'>
                        Развиваем и контролируем продажи за вас
                    </p>
                </div>

                <div className='main__item-left'>

                    <div className='table'>
                        <h2 className='table__title'>
                            Вместе с<span className='table__title_use-gradient'> бесплатной консультацией </span> мы дарим:
                        </h2>
                        <ul className='table__lists'>
                            <li className="table__list">
                            <span className='table__list-arrow table__list-arrow-first'></span>

                                Виджеты
                                <p className='table__list-text'>
                                    30 готовых 
                                    решений
                                </p>
                            </li>
                            <li className="table__list">
                            <span className='table__list-arrow table__list-arrow-second'></span>

                                Dashboard
                                <p className='table__list-text'>
                                    с показателями
                                    вашего бизнеса
                                </p>
                            </li>
                            <li className="table__list">
                                <span className='table__list-arrow table__list-arrow-third'></span>
                                Skype Аудит
                                <p className='table__list-text'>
                                    отдела продаж и 
                                    <span style={{textTransform:'uppercase'}}> CRM</span> системы
                                </p>
                            </li>
                            <li className="table__list">
                            <span className='table__list-arrow table__list-arrow-fouth'></span>  

                                35 дней
                                <p className='table__list-text'>использования <span style={{textTransform:'uppercase'}}> CRM</span></p>
                            </li>
                        </ul>
                        <div className='table__buttons'>
                            <button type='button' className="table__button">Получить консультацию</button>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    );
};

export default Main;