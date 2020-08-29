import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../../components/SignUpForm';
const SingUp = (props) => {
  console.log('SingUp component');

  return (
    <React.Fragment>
      <SignUpForm />
    </React.Fragment>
  );
};

SingUp.propTypes = {};

export default SingUp;
