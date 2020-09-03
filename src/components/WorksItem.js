import React from 'react';
import classNames from 'classnames';

import DoneItemType from './DoneItemType';

function WorksItem(props) {
  return (
    <li
      className={classNames('portfilio__item', {
        'portfilio__item--top': props.top,
      })}
    >
      <img
        src={props.lico}
        alt=''
        width='280'
        height={props.top ? '480' : '176'}
      />
      {props.top && <span className='portfolio__label'>Работа месяца</span>}
      <div className='portfolio__item-wrapper'>
        {props.children}
        <ul className='portfolio__done-list'>
          <DoneItemType type={props.type} />
        </ul>
      </div>
    </li>
  );
}

export default WorksItem;
