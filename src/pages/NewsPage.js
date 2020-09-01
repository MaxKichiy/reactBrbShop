import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import { NavLink } from 'react-router-dom';

function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  const newsList = news.map((el, index) => {
    return (
      <li className='news__item newspage__item' key={`${el}_${index}`}>
        <time className='news__date' dateTime='2020-08-20'>
          <b className='news__day'>{11}</b>
          <span className='news__month'>авг</span>
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
        <ul className='news__list'>
          {/* <li className='news__item'>
            <time className='news__date' dateTime='2020-08-20'>
              <b className='news__day'>20</b>
              <span className='news__month'>авг</span>
              <div className='news__date--arrow'></div>
            </time>
            <p className='news__text'>
              Нам наконец завезли Ягермайстер! Теперь вы можете пропусить
              стаканчик во время стрижки.
            </p>
          </li>
          <li className='news__item'>
            <time className='news__date' dateTime='2020-07-17'>
              <b className='news__day'>17</b>
              <span className='news__month'>июн</span>
              <div className='news__date--arrow'></div>
            </time>
            <p className='news__text'>
              В нашей команде пополнение, Борис «Бритва» Стригунец, обладатель
              множества титулов и наград пополнил наши стройные ряды. Спешите
              записаться!
            </p>
          </li> */}
          {newsList}
        </ul>
      </div>
    </section>
  );
}

export default NewsPage;
