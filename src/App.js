import React, { useEffect } from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import Main from './pages/Main';
import FormPage from './pages/FormPage';
import Portfolio from './pages/Portfolio';
import { Route, Switch, useLocation } from 'react-router';
import NewsPage from './pages/NewsPage';
import { useDispatch } from 'react-redux';
import { fetchNews } from './redux/actions/news';
import Login from './pages/Login';
import { setActive } from './redux/actions/auth';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import { auth } from './firebase';
import UpdateProfile from './pages/UpdateProfile';

function App(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(setActive(user));
    });
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Switch>
          {location.pathname.includes('/login') && <Login />}
          {location.pathname.includes('/signup') && <Signup />}
          {location.pathname.includes('/forgot') && <Forgot />}
          {location.pathname.includes('/update-profile') && <UpdateProfile />}
        </Switch>
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/form' component={FormPage} />
          <Route path='/news/:id' component={NewsPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
