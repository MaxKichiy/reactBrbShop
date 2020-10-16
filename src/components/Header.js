import React, { useEffect, useState } from 'react';
import desktopHeader from '../scss/assets/desktop-header.svg';
import tabletHeader from '../scss/assets/logotype-tablet.svg';
import mobileHeader from '../scss/assets/logotype-mob.svg';
import Navigation from './Navigation';
import { useLocation } from 'react-router';

const Header = React.memo(function Header() {
  let location = useLocation().pathname.split();
  const links = {
    '/form': 'Записаться',
    '/': 'Главная',
    '/portfolio': 'Наши работы',
    '/news': 'Новости',
  };
  if (location[0].includes('/', 1)) {
    location = `/` + location[0].split('/')[1];
  }

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(links[location]);
  }, [location]);
  return (
    <header className='page-header'>
      <a href='/' className='page-header__logo'>
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
      </a>
      <Navigation activeLink={activeLink} />
    </header>
  );
});

export default Header;
