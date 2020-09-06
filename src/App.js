import React, { useEffect } from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import Main from './pages/Main';
import FormPage from './pages/FormPage';
import Portfolio from './pages/Portfolio';
import { Route, Switch, withRouter } from 'react-router';
import NewsPage from './pages/NewsPage';
import { useDispatch } from 'react-redux';
import { fetchNews } from './redux/actions/news';
import Login from './pages/Login';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  // console.log(props);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        {props.history.location.pathname.includes('/login') && <Login />}
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/form' component={FormPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
