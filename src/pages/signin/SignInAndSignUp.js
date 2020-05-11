import React from 'react'
import './sign-in.styles.scss'
import PropTypes from 'prop-types'
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInAndSignUp = props => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

SignInAndSignUp.propTypes = {

}

export default SignInAndSignUp
