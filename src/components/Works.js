import React from 'react';
import lico1 from '../scss/assets/lico1-mobile.jpg';
import lico2 from '../scss/assets/lico2-mobile.jpg';
import lico3 from '../scss/assets/lico3-mobile.jpg';
import lico4 from '../scss/assets/lico4-mobile.jpg';
import { NavLink } from 'react-router-dom';

function Works() {
  return (
    <section className='portfolio'>
      <div className='main__arrow portfolio__arrow portfolio__arrow--white'></div>
      <div className='portfolio__wrapper'>
        <h1 className='portfolio__title'>Наши работы</h1>
        <NavLink to='/' className='portfolio__button button'>
          На главную
        </NavLink>
        <ul className='portfolio__list'>
          <li className='portfilio__item portfilio__item--top'>
            <img src={lico1} alt='' width='280' height='480' />
            <span className='portfolio__label'>Работа месяца</span>
            <div className='portfolio__item-wrapper'>
              <h3 className='portfolio__item-title'>Лжепётр Мчиславский</h3>
              <p className='portfolio__text'>
                Где я только не стригся, но так как делаете это вы — не умеет
                никто другой! Еще раз спасибо и до скорого!
              </p>
              <ul className='portfolio__done-list'>
                <li className='portfolio__done-item done-item--haircut'>
                  Стрижка
                </li>
                <li className='portfolio__done-item done-item--beard'>
                  Бритье
                </li>
                <li className='portfolio__done-item done-item--mustache'>
                  Усы
                </li>
              </ul>
            </div>
          </li>
          <li className='portfilio__item'>
            <img src={lico2} alt='' width='280' height='176' />

            <div className='portfolio__item-wrapper'>
              <h3 className='portfolio__item-title'>Саша Мальцев</h3>
              <p className='portfolio__text'>
                Попросил омолодить и омолодили! Кто теперь скажет, что мне 45?
              </p>
              <ul className='portfolio__done-list'>
                <li className='portfolio__done-item done-item--haircut'>
                  Стрижка
                </li>
              </ul>
            </div>
          </li>
          <li className='portfilio__item'>
            <img src={lico3} alt='' width='280' height='176' />

            <div className='portfolio__item-wrapper'>
              <h3 className='portfolio__item-title'>Владимир Иваныч</h3>
              <p className='portfolio__text'>К зимнему сезону — готов!</p>
              <ul className='portfolio__done-list'>
                <li className='portfolio__done-item done-item--beard'>
                  Борода
                </li>
                <li className='portfolio__done-item done-item--mustache'>
                  Усы
                </li>
              </ul>
            </div>
          </li>
          <li className='portfilio__item'>
            <img src={lico4} alt='' width='280' height='176' />

            <div className='portfolio__item-wrapper'>
              <h3 className='portfolio__item-title'>Винстон Синий</h3>
              <p className='portfolio__text'>
                Как только заростаю и волосы начинают мешать видеть — бегом в
                Бородинский!
              </p>
              <ul className='portfolio__done-list'>
                <li className='portfolio__done-item done-item--haircut'>
                  Стрижка
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='main__arrow portfolio__arrow'></div>
    </section>
  );
}

export default Works;
