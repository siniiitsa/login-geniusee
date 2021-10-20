import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage/LoginPage';
import { paths } from './paths';

export const App = () => {
  return (
    <Switch>
      <Route path={paths.login()}>
        <LoginPage />
      </Route>
      <Redirect to={paths.login()} />
    </Switch>
  );
};
