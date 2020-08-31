import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import { Grid, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import InputField from '../../../../custom-fields/InputField';
import * as Yup from 'yup';
import './styles.scss';
const SignUp = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Your first name is required.'),
    lastName: Yup.string().required('Your last name is required.'),
    email: Yup.string()
      .required('Your email name address is required.')
      .email("Your email don't match the email address."),
    password: Yup.string()
      .required('Your password is required.')
      .min(6, 'Your password must be at least 6 characters'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        return (
          <Form className='content__form'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={3}>
              <Grid item sm={6}>
                <FastField
                  name='firstName'
                  component={InputField}
                  label='First name'
                />
              </Grid>
              <Grid item sm={6}>
                <FastField
                  name='lastName'
                  component={InputField}
                  label='Last name'
                />
              </Grid>
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
              <Grid item sm={12}>
                <FastField
                  type='date'
                  name='birthday'
                  defaultValue='1999-06-23'
                  component={InputField}
                  label='Your birthday'
                />
              </Grid>
              <Grid item sm={12}>
                <FastField
                  type='gender'
                  name='gender'
                  component={InputField}
                  label='Your gender'
                />
              </Grid>
              <Grid item sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label='I accept the Terms and Conditions of the website'
                />
              </Grid>
              <Grid item sm={12}>
                <Button
                  id='signup'
                  variant='contained'
                  className='w-100'
                  size='large'
                  color='secondary'>
                  Complete Registration!
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

SignUp.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUp;
