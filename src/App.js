import React from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import Main from './pages/Main';
import Form from './pages/Form';
import Portfolio from './pages/Portfolio';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/portfolio' component={Portfolio} exact />
          <Route path='/form' component={Form} exact />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
