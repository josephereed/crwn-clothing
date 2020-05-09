import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/hats' component={HatsPage} />
  </Switch>
  )
}

export default App;
