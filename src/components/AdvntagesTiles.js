import React from 'react';

import classNames from 'classnames';

function AdvntagesTiles(props) {
  return (
    <li
      className={classNames(
        'advantages__item',
        'slider__item',
        { 'advantages__item--fast': props.type == 'fast' },
        { 'advantages__item--cool': props.type == 'cool' },
        { 'advantages__item--expensive': props.type == 'expensive' },
        { 'slider__item--active': props.active }
      )}
    >
      {props.children}
    </li>
  );
}

export default AdvntagesTiles;
