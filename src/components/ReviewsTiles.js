import React from 'react';
import classNames from 'classnames';
import travis from '../scss/assets/travis.png';

function ReviewsTiles(props) {
  return (
    <blockquote
      className={classNames(
        'reviews__item',
        'slider__item',
        { 'reviews__item--first': props.type === 'first' },
        { 'reviews__item--second': props.type === 'second' },
        { 'reviews__item--third': props.type === 'third' },
        { 'slider__item--active': props.active }
      )}
    >
      <p className='reviews__author-picture'>
        <img
          className='reviews__author-image'
          src={travis}
          alt='Фото человека'
          width='50'
          height='50'
        />
      </p>
      <p className='reviews__text'>{props.children}</p>
    </blockquote>
  );
}

export default ReviewsTiles;
