import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import FacebookLogin from '../../../../components/LoginPage/LoginService/FacebookLogin';
import GoogleLogin from '../../../../components/LoginPage/LoginService/GoogleLogin';
import GithubLogin from '../../../../components/LoginPage/LoginService/GithubLogin';

const SignInForm = (props) => {
  return (
    <React.Fragment>
      <form action='' className='content__form'>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}>
          <Grid item sm={12}>
            <TextField
              className='w-100'
              id='outlined-basic'
              label='Your email'
              variant='outlined'
              color='secondary'
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              className='w-100'
              id='outlined-basic'
              label='Your password'
              variant='outlined'
              color='secondary'
            />
          </Grid>
          <Grid item sm={6}>
            <FormControlLabel
              control={
                <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />
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
      </form>
    </React.Fragment>
  );
};

SignInForm.propTypes = {};

export default SignInForm;
