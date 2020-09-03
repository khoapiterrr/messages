import React from 'react';
import { Button } from '@material-ui/core';
import googleImage from '../../../assets/images/shapes-and-symbols.png';

const GoogleLogin = () => {
  const openWindowLogin = () => {
    window.open('http://localhost:8888/api/auth/google', '_self');
  };
  return (
    <React.Fragment>
      <Button
        id='google'
        variant='contained'
        className='w-100'
        size='large'
        onClick={openWindowLogin}
        color='secondary'>
        <img src={googleImage} alt='Google+' /> &nbsp; Login with google+
      </Button>
    </React.Fragment>
  );
};

export default GoogleLogin;
