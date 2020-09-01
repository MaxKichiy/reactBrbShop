import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationSiteItem = React.memo(function NavigationSiteItem(props) {
  return (
    <li className='site-list__item '>
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
