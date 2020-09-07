import React from 'react';
import lico1 from '../scss/assets/lico1-mobile.jpg';
import lico2 from '../scss/assets/lico2-mobile.jpg';
import lico3 from '../scss/assets/lico3-mobile.jpg';
import lico4 from '../scss/assets/lico4-mobile.jpg';
import { NavLink } from 'react-router-dom';
import WorksItem from './WorksItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPortfolios } from '../redux/actions/portfolio';

function Works() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, []);
  const portfolio = useSelector((state) => state.portfolio.portfolio);

  const portfolioList = portfolio.map((el, index) => (
    <WorksItem
      lico={el.picture.mob}
      top={el.work_month}
      type={el.cut_types}
      key={`${el}_${index}`}
    >
      <h3 className='portfolio__item-title'>{el.name}</h3>
      <p className='portfolio__text'>{el.text}</p>
    </WorksItem>
  ));
  return (
    <section className='portfolio'>
      <div className='main__arrow portfolio__arrow portfolio__arrow--white'></div>
      <div className='portfolio__wrapper'>
        <h1 className='portfolio__title'>Наши работы</h1>
        <NavLink to='/' className='portfolio__button button'>
          На главную
        </NavLink>
        <ul className='portfolio__list'>{portfolioList}</ul>
      </div>
      <div className='main__arrow portfolio__arrow'></div>
    </section>
  );
}

export default Works;
