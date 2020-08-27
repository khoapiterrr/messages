import React from 'react';
import {
  Container,
  Grid,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import './styles.scss';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import googleImage from '../../assets/images/shapes-and-symbols.png';
import githubImage from '../../assets/images/github-image.png';
import Logo from '../../assets/images/ltk.png';
const LoginPage = () => {
  return (
    <React.Fragment>
      <div className='bg-page'>
        <div className='content-bg-wrap'></div>
        <Container fixed={true} className='layout-content'>
          <Grid
            container
            direction='row'
            spacing={8}
            alignItems='center'
            justify='center'>
            <Grid item xl={5} md={5} sm={10}>
              <div className='lading-content'>
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>
                  We are the best and biggest social network with 5 billion
                  active users all around the world. Share you thoughts, write
                  blog posts, show your favourite music via Stopify, earn badges
                  and much more!
                </p>
                <a href='/register'>
                  <Button variant='outlined' className='c-white'>
                    Register!
                  </Button>
                </a>
              </div>
            </Grid>
            <Grid item xl={5} md={5} sm={10}>
              <div className='register-login-forn'>
                <ul className='nav nav-tabs'>
                  <li className='nav-item'>
                    <a className='nav-link' href='#home'>
                      <PowerSettingsNewIcon color='disabled' />
                      <div className='ripple-container' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link active' href='#profile'>
                      <LockOpenIcon color='disabled' />
                      <div className='ripple-container' />
                    </a>
                  </li>
                </ul>
                <div className='content'>
                  <div className='title'>
                    <img src={Logo} alt='' /> Login to your Account
                  </div>
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
                        <Button
                          id='facebook'
                          variant='contained'
                          className='w-100'
                          size='large'
                          color='secondary'>
                          <FacebookIcon /> &nbsp; Login with facebook
                        </Button>
                      </Grid>

                      <Grid item sm={12}>
                        <Button
                          id='google'
                          variant='contained'
                          className='w-100'
                          size='large'
                          color='secondary'>
                          <img src={googleImage} alt='Google+' /> &nbsp; Login
                          with google+
                        </Button>
                      </Grid>
                      <Grid item sm={12}>
                        <Button
                          id='github'
                          variant='contained'
                          className='w-100'
                          size='large'
                          color='secondary'>
                          <img src={githubImage} alt='Github' /> &nbsp; Login
                          with Github
                        </Button>
                      </Grid>
                      <Grid item sm={12}>
                        <p>
                          Don’t you have an account?{' '}
                          <a href='#'>Register Now!</a> it’s really simple and
                          you can start enjoing all the benefits!
                        </p>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
