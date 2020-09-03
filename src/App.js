import React, { useEffect } from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import Main from './pages/Main';
import FormPage from './pages/FormPage';
import Portfolio from './pages/Portfolio';
import { Route, Switch } from 'react-router';
import NewsPage from './pages/NewsPage';
import { useDispatch } from 'react-redux';
import { fetchNews } from './redux/actions/news';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/portfolio' component={Portfolio} exact />
          <Route path='/form' component={FormPage} exact />
          <Route path='/news' component={NewsPage} exact />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
