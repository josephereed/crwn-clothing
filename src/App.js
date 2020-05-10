import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.scss';
import SignInAndSignUp from './pages/signin/SignInAndSignUp';
import { auth } from './firebase/firebase.utils';

function App() {
  const [initialState, setInitialState] = useState({
    currentUser: null
  });

  var unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setInitialState({ currentUser: user });
      console.log(user);
      return () => unsubscribeFromAuth();
    })
  }, [])

  return (
    <>
      <Header currentUser={initialState.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </>
  );
}

export default App;
