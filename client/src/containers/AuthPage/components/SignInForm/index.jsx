import React from 'react';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Grid, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import FacebookLogin from '../../../../components/LoginPage/LoginService/FacebookLogin';
import GoogleLogin from '../../../../components/LoginPage/LoginService/GoogleLogin';
import GithubLogin from '../../../../components/LoginPage/LoginService/GithubLogin';
import InputField from '../../../../custom-fields/InputField';

const SignInForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('The email address is required.')
      .email("The email don't match the email address"),
    password: Yup.string()
      .required('The password is required.')
      .min(6, 'The password must be at least 6 characters'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log(values);
        return (
          <Form className='content__form'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={3}>
              <Grid item sm={12}>
                <FastField
                  name='email'
                  component={InputField}
                  label='Your email'
                />
              </Grid>

              <Grid item sm={12}>
                <FastField
                  type='password'
                  name='password'
                  component={InputField}
                  label='Your password'
                />
              </Grid>
              <Grid item sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label='Remember Me'
                />
              </Grid>
              <Grid item sm={6} className='text-right'>
                Forgot my Password
              </Grid>
              <Grid item sm={12}>
                <Button
                  id='login'
                  variant='contained'
                  className='w-100'
                  size='large'
                  color='secondary'>
                  Login
                </Button>
              </Grid>
              <div className='or'></div>
              <Grid item sm={12}>
                <FacebookLogin />
              </Grid>

              <Grid item sm={12}>
                <GoogleLogin />
              </Grid>
              <Grid item sm={12}>
                <GithubLogin />
              </Grid>
              <Grid item sm={12}>
                <p>
                  Don’t you have an account? <a href='#'>Register Now!</a> it’s
                  really simple and you can start enjoing all the benefits!
                </p>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

SignInForm.propTypes = {};

export default SignInForm;
