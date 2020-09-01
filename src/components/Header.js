import React from 'react';
import desktopHeader from '../scss/assets/desktop-header.svg';
import tabletHeader from '../scss/assets/logotype-tablet.svg';
import mobileHeader from '../scss/assets/logotype-mob.svg';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const Header = React.memo(function Header() {
  console.log('rendered');
  return (
    <header className='page-header'>
      <NavLink to='/' className='page-header__logo'>
        <picture>
          <source media='(min-width: 1200px)' srcSet={desktopHeader} />
          <source media='(min-width: 768px)' srcSet={tabletHeader} />
          <img
            src={mobileHeader}
            width='226'
            height='30'
            alt='Логотип'
            className='page-header__logo-image'
          />
        </picture>
      </NavLink>
      <Navigation />
    </header>
  );
});

export default Header;
