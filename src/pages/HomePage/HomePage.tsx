import React, { ReactElement } from 'react';

import s from './HomePage.module.scss';

export const HomePage = (): ReactElement => (
  <div className={s.page}>
    <h1>Home page</h1>
  </div>
);
