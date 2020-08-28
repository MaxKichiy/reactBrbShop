import React from 'react';

import travis from '../scss/assets/travis.png';

function Reviews() {
  return (
    <section className='reviews'>
      <div className='reviews__wrapper slider'>
        <h2 className='reviews__title'>Отзывы о нас</h2>
        <a href='#' className='reviews__write button'>
          Оставить свой
        </a>
        <div className='reviews__list slider__list'>
          <blockquote className='reviews__item reviews__item--first slider__item slider__item--active'>
            <p className='reviews__author-picture'>
              <img
                src={travis}
                alt='Фото человека'
                width='50'
                height='50'
                className='reviews__author-image'
              />
            </p>

            <p className='reviews__text '>
              <cite className='reviews__author-name'>Трэвис Баркер</cite>
              <br />
              Спасибо за лысину! Был проездом в Москве, заскочил побриться,
              чтобы было видно новую татуировку!
            </p>
          </blockquote>
          <blockquote className='reviews__item reviews__item--second slider__item'>
            <p className='reviews__author-picture'>
              <img
                src={travis}
                alt='Фото человека'
                width='50'
                height='33'
                className='reviews__author-image'
              />
            </p>

            <p className='reviews__text'>
              <cite className='reviews__author-name'>Питер Паркер</cite>
              <br />
              Спасибо за лысину! Был проездом в Москве, заскочил побриться,
              чтобы было видно новую татуировку!
            </p>
          </blockquote>
          <blockquote className='reviews__item reviews__item--third slider__item'>
            <p className='reviews__author-picture'>
              <img
                src={travis}
                alt='Фото человека'
                width='50'
                height='33'
                className='reviews__author-image'
              />
            </p>

            <p className='reviews__text'>
              <cite className='reviews__author-name'>Джон Голт</cite>
              <br />
              Спасибо за лысину! Был проездом в Москве, заскочил побриться,
              чтобы было видно новую татуировку!
            </p>
          </blockquote>
          <button className='reviews__prev' type='button'></button>
          <button className='reviews__next' type='button'></button>
        </div>
        <p className='reviews__toggles slider__toggles'>
          <button
            className='slider__toggle slider__toggle--first slider__toggle--active'
            type='button'
          ></button>
          <button
            className='slider__toggle slider__toggle--second'
            type='button'
          ></button>
          <button
            className='slider__toggle slider__toggle--third'
            type='button'
          ></button>
        </p>
      </div>
    </section>
  );
}

export default Reviews;
