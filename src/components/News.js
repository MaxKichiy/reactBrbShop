import React from 'react';

function News() {
  return (
    <section className='news'>
      <div className='news__arrow'></div>
      <div className='news__wrapper'>
        <h2 className='news__title'>Новости и акции</h2>
        <ul className='news__list'>
          <li className='news__item'>
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
          </li>
        </ul>
        <a href='/news' className='news__to-all button'>
          показать все
        </a>
      </div>
    </section>
  );
}

export default News;
