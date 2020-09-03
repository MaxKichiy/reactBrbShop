import React, { useEffect } from 'react';
import Stats from '../components/Stats';
import Advantages from '../components/Advantages';
import News from '../components/News';
import Reviews from '../components/Reviews';

function Main() {
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
