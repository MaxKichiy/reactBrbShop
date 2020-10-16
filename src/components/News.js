import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const News = React.memo(function News() {
  const getMonth = (month) => {
    const monthes = [
      'янв',
      'фев',
      'мар',
      'апр',
      'мая',
      'июл',
      'июн',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ];
    return monthes[month - 1];
  };
  const [width, setWidth] = useState(window.innerWidth);
  const newsList = useSelector((state) => state.news.news);
  const newsListSmall = newsList.map((el, index) => {
    return (
      <NavLink to={`/news/${index}`} key={`${el}_${index}`}>
        <li className='news__item'>
          <time className='news__date' dateTime={el.date}>
            <b className='news__day'>{el.date.split('-')[0]}</b>
            <span className='news__month'>
              {getMonth(el.date.split('-')[1])}
            </span>
            <div className='news__date--arrow'></div>
          </time>
          <p className='news__text newspage__text'>{el.title}</p>
        </li>
      </NavLink>
    );
  });
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <section className='news'>
      <div className='news__arrow'></div>
      <div className='news__wrapper'>
        <h2 className='news__title'>Новости и акции</h2>
        <ul className='news__list'>
          {width >= '1200' ? newsListSmall.slice(3) : newsListSmall.slice(4)}
        </ul>
        <NavLink to='/news' className='portfolio__button news__to-all button'>
          показать все
        </NavLink>
      </div>
    </section>
  );
});

export default News;
