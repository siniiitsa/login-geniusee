import cn from 'classnames';
import { Field, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

import { Button, TextInput } from '../../components/core';
import { AuthForm, AuthLayout } from '../../components/shared';
import { paths } from '../../paths';
import { loginSchema } from '../../validation';
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}>
        {({ isValid }) => {
          return (
            <AuthForm title="Log in to you account:">
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
              <Button
                className={s.submitButton}
                type="submit"
                disabled={!isValid}>
                Log in
              </Button>
              <p className={s.registerMessage}>
                Don't have an account?{" "}
                <Link className={s.link} to={paths.register()}>
                  Register
                </Link>
              </p>
              <Link
                className={cn(s.link, s.noPasswordLink)}
                to={paths.recoverPass()}>
                I forgot my password
              </Link>
            </AuthForm>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};
