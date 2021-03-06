import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const NavigationSiteItem = React.memo(function NavigationSiteItem(props) {
  return (
    <li
      onClick={() => props.onClick(props.children)}
      className={classNames('site-list__item', {
        'site-list__item--active': props.active === props.children,
      })}
    >
      <NavLink
        to={props.link}
        // activeClassName='site-list__item--active'
      >
        {props.children}
      </NavLink>
    </li>
  );
});

export default NavigationSiteItem;
