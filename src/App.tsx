import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { paths } from './paths';

export const App = () => {
  return (
    <Switch>
      <Route path={paths.login()}>
        <h1>Login page</h1>
      </Route>
    </Switch>
  );
};
