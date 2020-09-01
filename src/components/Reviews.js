import React, { useState } from 'react';
import ReviewsTiles from './ReviewsTiles';
import SliderButton from './SliderButton';
import ReviewsButton from './ReviewsButton';

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
      Спасибо за стрижку! Теперь моя укладка будет держаться во время полетов.
    </>,
    <>
      <cite className='reviews__author-name'>Джон Голт</cite>
      <br />
      Спасибо за то что вы есть! Теперь я уверен что нам нужен такой в долине.
    </>,
  ];

  const onClickRevHandler = (data) => {
    setIsActive(revTypes.indexOf(data));
    if (data === 'prev' && isActive === 0) {
      setIsActive(2);
    } else if (data === 'next' && isActive === 2) {
      setIsActive(0);
    } else if (data === 'prev') {
      setIsActive(isActive - 1);
    } else if (data === 'next') {
      setIsActive(isActive + 1);
    }
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

          <ReviewsButton type='prev' onClick={onClickRevHandler} />
          <ReviewsButton type='next' onClick={onClickRevHandler} />
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
