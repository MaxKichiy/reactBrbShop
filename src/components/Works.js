import React from 'react';
import lico1 from '../scss/assets/lico1-mobile.jpg';
import lico2 from '../scss/assets/lico2-mobile.jpg';
import lico3 from '../scss/assets/lico3-mobile.jpg';
import lico4 from '../scss/assets/lico4-mobile.jpg';
import { NavLink } from 'react-router-dom';
import WorksItem from './WorksItem';

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
          <WorksItem lico={lico1} top type={['haircut', 'mustache', 'beard']}>
            <h3 className='portfolio__item-title'>Лжепётр Мчиславский</h3>
            <p className='portfolio__text'>
              Где я только не стригся, но так как делаете это вы — не умеет
              никто другой! Еще раз спасибо и до скорого!
            </p>
          </WorksItem>
          <WorksItem lico={lico2} type={['haircut']}>
            <h3 className='portfolio__item-title'>Саша Мальцев</h3>
            <p className='portfolio__text'>
              Попросил омолодить и омолодили! Кто теперь скажет, что мне 45?
            </p>
          </WorksItem>
          <WorksItem lico={lico3} type={['beard', 'mustache']}>
            <h3 className='portfolio__item-title'>Владимир Иваныч</h3>
            <p className='portfolio__text'>К зимнему сезону — готов!</p>
          </WorksItem>
          <WorksItem type={['haircut']} lico={lico4}>
            <h3 className='portfolio__item-title'>Винстон Синий</h3>
            <p className='portfolio__text'>
              Как только заростаю и волосы начинают мешать видеть — бегом в
              Бородинский!
            </p>
          </WorksItem>
        </ul>
      </div>
      <div className='main__arrow portfolio__arrow'></div>
    </section>
  );
}

export default Works;
