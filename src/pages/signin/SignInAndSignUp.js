import React from 'react'
import './sign-in.styles.scss'
import PropTypes from 'prop-types'
import SignIn from '../../components/sign-in/SignIn';

const SignInAndSignUp = props => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  )
}

SignInAndSignUp.propTypes = {

}

export default SignInAndSignUp
