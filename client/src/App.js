import React, { Suspense } from 'react';
import './assets/scss/main.scss';
import LoginPage from './components/LoginPage';
import { Button, ThemeProvider } from '@material-ui/core';
import NotFound from './components/NotFound';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import theme from './components/themes/Palette';
// Lazy load - Code splitting
const AuthPage = React.lazy(() => import('./containers/AuthPage'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading ...</div>}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            {/* <Switch>
            <Route path='/' component={} />
            <Route component={NotFound} />
          </Switch> */}
            <AuthPage />
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
