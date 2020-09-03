import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import { NavLink } from 'react-router-dom';

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

function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  const newsList = news.map((el, index) => {
    return (
      <li className='news__item newspage__item' key={`${el}_${index}`}>
        <time className='news__date' dateTime={el.date}>
          <b className='news__day'>{el.date.split('-')[0]}</b>
          <span className='news__month'>{getMonth(el.date.split('-')[1])}</span>
          <div className='news__date--arrow'></div>
        </time>
        <p className='news__text newspage__text'>{el.text}</p>
      </li>
    );
  });

  return (
    <section className='news newspage'>
      <div className='news__wrapper newspage__wrapper'>
        <h2 className='news__title'>Новости и акции</h2>
        <NavLink to='/' className='portfolio__button button'>
          На главную
        </NavLink>
        <ul className='news__list'>{newsList}</ul>
      </div>
    </section>
  );
}

export default NewsPage;
