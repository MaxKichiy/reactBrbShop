import React from 'react';
import Works from '../components/Works';
import Price from '../components/Price';

function Portfolio() {
  return (
    <main className='secondary-page'>
      <Works />
      <Price />
      <div className='main__arrow portfolio__arrow portfolio__arrow--black'></div>
    </main>
  );
}

export default Portfolio;
