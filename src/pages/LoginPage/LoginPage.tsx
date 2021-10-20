import { Field, Formik } from 'formik';
import React from 'react';

import { Button, TextInput } from '../../components/core';
import { AuthForm, AuthLayout } from '../../components/shared';
import s from './LoginPage.module.scss';

type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const handleSubmit = (values: Partial<LoginFormValues>) => {
    // ...HTTP request should happen here

    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <AuthLayout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <AuthForm>
            <Field
              className={s.textInput}
              component={TextInput}
              title="Email"
              name="email"
              placeholder="mail@genniuse.com"
            />
            <Field
              className={s.textInput}
              component={TextInput}
              title="Password"
              name="password"
              type="password"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Log in
            </Button>
          </AuthForm>
        )}
      </Formik>
    </AuthLayout>
  );
};
