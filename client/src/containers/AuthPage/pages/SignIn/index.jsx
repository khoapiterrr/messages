import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../components/SignInForm';

const SignIn = (props) => {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <React.Fragment>
      <SignInForm initialValues={initialValues} />
    </React.Fragment>
  );
};

SignIn.propTypes = {};

export default SignIn;
