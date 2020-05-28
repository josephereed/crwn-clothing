import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/userActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/user.selectors';

// Pages
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/signin/SignInAndSignUp';
import Checkout from './pages/checkout/Checkout';

import Header from './components/header/Header';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    var unsubscribeFromAuth;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //eslint--disable-next-line
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
  }, [setCurrentUser]);

  //console.log(currentUser);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
