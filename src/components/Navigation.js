import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationSiteItem from './NavigationSiteItem';
import classNames from 'classnames';

const Navigation = React.memo(function Navigation(props) {
  const [activeLink, setActiveLink] = useState('Главная');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener('click', handeOutsideClick);
  }, []);
  const linkRef = useRef();
  const menuRef = useRef();
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  const handeOutsideClick = (e) => {
    if (!e.path.includes(menuRef.current)) {
      setIsOpen(false);
    }

    if (e.path.includes(linkRef.current)) {
      setIsOpen(false);
    }
  };

  const activeHandler = (data) => {
    setActiveLink(data);
  };

  return (
    <nav
      ref={menuRef}
      className={classNames(
        { 'main-nav main-nav--closed': !isOpen },
        { 'main-nav main-nav--opened': isOpen }
      )}
    >
      <button
        className='main-nav__button'
        onClick={onClickHandler}
        type='button'
      ></button>
      <div className='main-nav__wrapper'>
        <ul className='main-nav__list site-list' ref={linkRef}>
          <NavigationSiteItem
            link='/'
            onClick={activeHandler}
            active={activeLink}
            exact
          >
            Главная
          </NavigationSiteItem>
          <NavigationSiteItem
            active={activeLink}
            link='/portfolio'
            onClick={activeHandler}
          >
            Наши работы
          </NavigationSiteItem>
          <NavigationSiteItem
            active={activeLink}
            link='/form'
            onClick={activeHandler}
          >
            Записаться
          </NavigationSiteItem>
          <NavigationSiteItem
            active={activeLink}
            link='/news'
            onClick={activeHandler}
          >
            Новости
          </NavigationSiteItem>
        </ul>
        <ul className='main-nav__list user-list'>
          <li className='user-list__item'>
            <NavLink to='/login' className='user-list__login'>
              <svg
                className='user-list__login-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.8572 15.4286L14.2857 12L10.8572 8.57141'
                  stroke='black'
                  strokeWidth='0.761905'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.2857 12H4'
                  stroke='black'
                  strokeWidth='0.761905'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.14282 9.14285V6.27885C5.14282 5.67442 5.38222 5.09459 5.80865 4.66623C6.23508 4.23787 6.81383 3.99585 7.41825 3.99313L16.5063 3.95656C16.8065 3.95536 17.1041 4.01333 17.3819 4.12716C17.6598 4.24099 17.9125 4.40844 18.1256 4.61997C18.3387 4.83149 18.508 5.08292 18.624 5.35991C18.7399 5.6369 18.8001 5.93401 18.8011 6.23428C18.8011 6.23428 18.8011 6.23428 18.8011 6.23428L18.8468 17.696C18.848 17.9969 18.7898 18.2951 18.6755 18.5735C18.5611 18.8519 18.393 19.1049 18.1806 19.3181C17.9682 19.5314 17.7158 19.7005 17.4379 19.816C17.16 19.9314 16.862 19.9909 16.5611 19.9908H7.42854C6.82233 19.9908 6.24095 19.75 5.81229 19.3214C5.38364 18.8927 5.14282 18.3113 5.14282 17.7051V14.8571'
                  stroke='black'
                  strokeWidth='0.761905'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Войти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navigation;
