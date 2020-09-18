import React from 'react';
// import PropTypes from 'prop-types';
import SignUpForm from '../../components/SignUpForm';
const SingUp = (props) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const onSubmit = (values) => {
    console.log(values, 'submit');
  };
  return (
    <React.Fragment>
      <SignUpForm initialValues={initialValues} onSubmit={(e) => onSubmit(e)} />
    </React.Fragment>
  );
};

SingUp.propTypes = {};

export default SingUp;
