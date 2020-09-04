import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const NavigationSiteItem = React.memo(function NavigationSiteItem(props) {
  return (
    <li
      onClick={() => props.onClick(props.children)}
      className={classNames(
        'site-list__item',

        {
          'site-list__item--active': props.active === props.children,
        }
      )}
    >
      <NavLink
        to={props.link}
        activeClassName='site-list__item--active'
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
});

export default NavigationSiteItem;
