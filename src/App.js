import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.scss';

function App() {
  return (
  <>
  <Header />
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={ShopPage} />
  </Switch>
  </>
  )
}

export default App;
