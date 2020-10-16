import React, { useState } from 'react';
import AdvntagesTiles from './AdvntagesTiles';
import SliderButton from './SliderButton';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Advantages() {
  const [isActive, setIsActive] = useState(0);
  const advTypes = ['fast', 'cool', 'expensive'];

  const advInside = [
    <>
      <h3 className='advantages__title '>Быстро</h3>
      <p className='advantages__description'>
        Мы делаем свою работу быстро! Два часа пролетят незаметно и Вы -
        счастливый обладатель стильной стрижки-минутки
      </p>
    </>,
    <>
      <h3 className='advantages__title'>Круто</h3>
      <p className='advantages__description'>
        Забудьте, как вы стриглись раньше. Мы сделаем из Вас звезду футбола или
        кино.Во всяком случае внешне.
      </p>
    </>,
    <>
      <h3 className='advantages__title '>Дорого</h3>
      <p className='advantages__description'>
        Наши мастера — профессионалы своего дела и не могут стоить дёшево. К
        тому же, разве цена не даёт определённый статус?
      </p>
    </>,
  ];

  const onClickHandler = (data) => {
    setIsActive(advTypes.indexOf(data));
  };

  return (
    <section className='advantages'>
      <div className='advantages__wrapper slider'>
        <h2 className='visually-hidden'>Наши преимущества</h2>
        <ul className='advantages__list slider__list'>
          {advTypes.map((el, index) => {
            let activOn = isActive === index ? true : false;
            return (
              <AdvntagesTiles key={`${index}_adv`} active={activOn} type={el}>
                {advInside[index]}
              </AdvntagesTiles>
            );
          })}
        </ul>
        <p className='advantages__toggles slider__toggles'>
          {advTypes.map((el, index) => {
            let activOn = isActive === index ? true : false;
            return (
              <SliderButton
                active={activOn}
                type={el}
                key={`${el}_${index}`}
                onClick={onClickHandler}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

export default Advantages;
