import React from 'react';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
const FacebookLogin = () => {
  const openWindowLogin = () => {
    window.open('http://localhost:8888/auth/facebook', '_self');
  };
  return (
    <React.Fragment>
      <Button
        id='facebook'
        variant='contained'
        className='w-100'
        size='large'
        color='secondary'>
        <FacebookIcon /> &nbsp; Login with facebook
      </Button>
    </React.Fragment>
  );
};

export default FacebookLogin;