import React, { useState } from 'react';
import ReviewsTiles from './ReviewsTiles';
import SliderButton from './SliderButton';

function Reviews() {
  const [isActive, setIsActive] = useState(0);
  const revTypes = ['first', 'second', 'third'];

  const revs = [
    <>
      <cite className='reviews__author-name'>Трэвис Баркер</cite>
      <br />
      Спасибо за лысину! Был проездом в Москве, заскочил побриться, чтобы было
      видно новую татуировку!
    </>,
    <>
      <cite className='reviews__author-name'>Питер Паркер</cite>
      <br />
      Спасибо за лысину! Был проездом в Москве, заскочил побриться, чтобы было
      видно новую татуировку!
    </>,
    <>
      <cite className='reviews__author-name'>Джон Голт</cite>
      <br />
      Спасибо за лысину! Был проездом в Москве, заскочил побриться, чтобы было
      видно новую татуировку!
    </>,
  ];

  const onClickRevHandler = (data) => {
    setIsActive(revTypes.indexOf(data));
  };

  return (
    <section className='reviews'>
      <div className='reviews__wrapper slider'>
        <h2 className='reviews__title'>Отзывы о нас</h2>
        <a href='/' className='reviews__write button'>
          Оставить свой
        </a>
        <div className='reviews__list slider__list'>
          {revTypes.map((el, index) => {
            let activeRev = isActive === index ? true : false;
            return (
              <ReviewsTiles
                active={activeRev}
                type={el}
                key={`${el}_${index}_rev`}
              >
                {revs[index]}
              </ReviewsTiles>
            );
          })}

          <button className='reviews__prev' type='button'></button>
          <button className='reviews__next' type='button'></button>
        </div>
        <p className='reviews__toggles slider__toggles'>
          {revTypes.map((el, index) => {
            let activeOn = isActive === index ? true : false;
            return (
              <SliderButton
                active={activeOn}
                onClick={onClickRevHandler}
                type={el}
                key={`${el}_${index}`}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

export default Reviews;
