import React from 'react';
import classNames from 'classnames';

function ReviewsButton(props) {
  return (
    <button
      className={classNames(
        { reviews__prev: props.type === 'prev' },
        { reviews__next: props.type === 'next' }
      )}
      onClick={() => props.onClick(props.type)}
      type='button'
    ></button>
  );
}

export default ReviewsButton;
