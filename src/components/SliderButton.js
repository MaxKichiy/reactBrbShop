import React from 'react';
import classNames from 'classnames';

function SliderButton(props) {
  return (
    <button
      onClick={() => props.onClick(props.type)}
      className={classNames(
        'slider__toggle',
        { 'slider__toggle--active': props.active },
        { '  slider__toggle--fast': props.type === 'fast' },
        { '  slider__toggle--cool': props.type === 'cool' },
        { '  slider__toggle--expensive': props.type === 'expensive' },
        { '  slider__toggle--first': props.type === 'first' },
        { '  slider__toggle--second': props.type === 'second' },
        { '  slider__toggle--third': props.type === 'third' }
      )}
      type='button'
    ></button>
  );
}

export default SliderButton;
