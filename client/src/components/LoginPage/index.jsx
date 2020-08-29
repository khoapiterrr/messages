import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';

import './styles.scss';

const LoginPage = ({ children }) => {
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
              {children}
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
