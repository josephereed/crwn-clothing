import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './actions/userActions';

import './App.scss';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/signin/SignInAndSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = ({setCurrentUser}) => {
  const [initialState, setInitialState] = useState({
    
  });
  const { currentUser } = initialState;

  var unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      // below code prevents memory leak related to listeners still being open
      // even if the component that cares about the listener is no longer on the page 
    });
    return () => unsubscribeFromAuth();
  }, []);

  console.log(currentUser)
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
