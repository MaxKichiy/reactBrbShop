import React from 'react';
import classNames from 'classnames';

function DoneItemType(props) {
  let arr = [];
  let elements = {
    mustache: 'Усы',
    haircut: 'Стрижка',
    beard: 'Бритье',
  };

  arr = props.type.map((el, index) => (
    <li
      className={classNames('portfolio__done-item', `done-item--${el}`)}
      key={`${el}_${index}`}
    >
      {elements[el]}
    </li>
  ));

  // if (props.mustache) {
  //   arr.push(<li className='portfolio__done-item done-item--mustache'>Усы</li>);
  // }
  // if (props.haircut) {
  //   arr.push(
  //     <li className='portfolio__done-item done-item--haircut'>Стрижка</li>
  //   );
  // }
  // if (props.beard) {
  //   arr.push(<li className='portfolio__done-item done-item--beard'>Бритье</li>);
  // }
  return arr;
}
export default DoneItemType;
