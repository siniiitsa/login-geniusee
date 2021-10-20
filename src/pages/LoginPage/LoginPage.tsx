import React from 'react';

import { Button, TextInput } from '../../components/core';
import { AuthForm, AuthLayout } from '../../components/shared';
import s from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthForm>
        <TextInput
          className={s.textInput}
          title="Email"
          placeholder="mail@genniuse.com"
        />
        <TextInput
          className={s.textInput}
          type="password"
          title="Password"
          placeholder="Password"
        />
        <Button>Log in</Button>
      </AuthForm>
    </AuthLayout>
  );
};
