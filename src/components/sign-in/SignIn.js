import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../forminput/FormInput';
import CustomButton from '../custombutton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import PropTypes from 'prop-types';

const SignIn = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={e => handleSubmit(e)}>
        <FormInput
          type="text"
          name="email"
          value={email}
          required
          onChange={e => onChange(e)}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          onChange={e => onChange(e)}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
