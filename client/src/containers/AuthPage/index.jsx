import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginPage from '../../components/LoginPage';
import { useRouteMatch, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignTabs from './components/SignTabs';
import NotFound from '../../components/NotFound';

const AuthPage = (props) => {
  const [tabCurrent, settabCurrent] = useState(true);

  return (
    <React.Fragment>
      <LoginPage>
        <SignTabs
          onClickTabsSignIn={settabCurrent}
          tabCurrent={tabCurrent}
          formTitle={
            tabCurrent ? 'Login to your Account' : 'Register to Ltk-Social'
          }>
          {tabCurrent ? <SignIn /> : <SignUp />}
        </SignTabs>
      </LoginPage>
    </React.Fragment>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
