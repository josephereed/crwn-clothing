import React, { useState } from 'react';
import FormInput from '../forminput/FormInput';
import CustomButton from '../custombutton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
  const [initialState, setInitialState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = e => {
    setInitialState({...initialState, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = initialState;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      setInitialState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  const { displayName, email, password, confirmPassword } = initialState;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={e => onSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={e => onChange(e)}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => onChange(e)}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
