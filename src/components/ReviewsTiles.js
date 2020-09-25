import React from 'react';
import classNames from 'classnames';

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
      {props.children}
    </blockquote>
  );
}

export default ReviewsTiles;
