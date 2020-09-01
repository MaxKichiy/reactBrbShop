import React, { useEffect } from 'react';
import Stats from '../components/Stats';
import Advantages from '../components/Advantages';
import News from '../components/News';
import Reviews from '../components/Reviews';
import { fetchNews } from '../redux/actions/news';
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return (
    <main className='page-main'>
      <h1 className='visually-hidden'>Свой Барбершоп</h1>
      <Stats />
      <Advantages />
      <News />
      <Reviews />
      <div className='main__arrow news__arrow'></div>
    </main>
  );
}

export default Main;
