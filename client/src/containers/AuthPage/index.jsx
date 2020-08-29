import React from 'react';
import PropTypes from 'prop-types';
import LoginPage from '../../components/LoginPage';
import { useRouteMatch, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignTabs from './components/SignTabs';
import NotFound from '../../components/NotFound';

const AuthPage = (props) => {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <React.Fragment>
      <LoginPage>
        <SignTabs>
          <SignIn />
        </SignTabs>
      </LoginPage>
    </React.Fragment>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
