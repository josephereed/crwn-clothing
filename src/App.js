import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/signin/SignInAndSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [initialState, setInitialState] = useState({
    currentUser: null
  });
  const { currentUser } = initialState;

  var unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setInitialState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
              ...initialState
            }
          });
        });
      }

      setInitialState({ currentUser: userAuth, ...initialState });
      // below code prevented from proper sign in
      // but was in the componentWillUnmount()
      // return unsubscribeFromAuth();
    });
    return () => unsubscribeFromAuth();
  }, []);

  console.log(currentUser)
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
