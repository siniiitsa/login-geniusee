import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, RecoverPasswordPage, RegistrationPage } from './pages';
import { paths } from './paths';

export const App = () => {
  return (
    <Switch>
      <Route path={paths.home()}>
        <HomePage />
      </Route>
      <Route path={paths.login()}>
        <LoginPage />
      </Route>
      <Route path={paths.register()}>
        <RegistrationPage />
      </Route>
      <Route path={paths.recoverPass()}>
        <RecoverPasswordPage />
      </Route>
      <Redirect to={paths.login()} />
    </Switch>
  );
};
