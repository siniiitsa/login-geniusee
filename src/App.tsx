import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginPage, RegistrationPage } from './pages';
import { paths } from './paths';

export const App = () => {
  return (
    <Switch>
      <Route path={paths.login()}>
        <LoginPage />
      </Route>
      <Route path={paths.register()}>
        <RegistrationPage />
      </Route>
      <Redirect to={paths.login()} />
    </Switch>
  );
};
