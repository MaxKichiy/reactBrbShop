import React from 'react';
import AdvntagesTiles from './AdvntagesTiles';

function Advantages() {
  return (
    <section className='advantages'>
      <div className='advantages__wrapper slider'>
        <h2 className='visually-hidden'>Наши преимущества</h2>
        <ul className='advantages__list slider__list'>
          <AdvntagesTiles type='fast'>
            <h3 className='advantages__title '>Быстро</h3>
            <p className='advantages__description'>
              Мы делаем свою работу быстро! Два часа пролетят незаметно и Вы -
              счастливый обладатель стильной стрижки-минутки
            </p>
          </AdvntagesTiles>
          <AdvntagesTiles type='cool'>
            <h3 className='advantages__title'>Круто</h3>
            <p className='advantages__description'>
              Забудьте, как вы стриглись раньше. Мы сделаем из Вас звезду
              футбола или кино.Во всяком случае внешне.
            </p>
          </AdvntagesTiles>
          <AdvntagesTiles type='expensive'>
            <h3 className='advantages__title '>Дорого</h3>
            <p className='advantages__description'>
              Наши мастера — профессионалы своего дела и не могут стоить дёшево.
              К тому же, разве цена не даёт определённый статус?
            </p>
          </AdvntagesTiles>
        </ul>
        <p className='advantages__toggles slider__toggles'>
          <button
            className='slider__toggle slider__toggle--active slider__toggle--fast'
            type='button'
          ></button>
          <button
            className='slider__toggle slider__toggle--cool'
            type='button'
          ></button>
          <button
            className='slider__toggle slider__toggle--expensive'
            type='button'
          ></button>
        </p>
      </div>
    </section>
  );
}

export default Advantages;
