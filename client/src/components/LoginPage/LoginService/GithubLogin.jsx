import React from 'react';
import { Button } from '@material-ui/core';

import githubImage from '../../../assets/images/github-image.png';
const GithubLogin = () => {
  const openWindowLogin = () => {
    window.open('http://localhost:8888/auth/github', '_self');
  };
  return (
    <React.Fragment>
      <Button
        id='github'
        onClick={openWindowLogin}
        variant='contained'
        className='w-100'
        size='large'
        color='secondary'>
        <img src={githubImage} alt='Github' /> &nbsp; Login with Github
      </Button>
    </React.Fragment>
  );
};

export default GithubLogin;
