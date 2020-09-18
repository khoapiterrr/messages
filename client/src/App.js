import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import { ConnectedRouter } from 'connected-react-router';
import { Button, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import theme from './components/themes/Palette';
import { MessagePage } from './components/MessagePage';
import { configStore, getHistory } from './containers/configurationStore';
import NotFound from './components/NotFound';

import './assets/scss/main.scss';
// Lazy load - Code splitting
const AuthPage = React.lazy(() => import('./containers/AuthPage'));

const store = configStore();
const history = getHistory();
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense fallback={<div>Loading ...</div>}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Switch>
                <Route path='/' exact component={MessagePage} />
                <Route path='/login' component={AuthPage} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </Suspense>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
