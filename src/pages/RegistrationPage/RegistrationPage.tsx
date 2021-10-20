import { Field, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

import { Button, TextInput } from '../../components/core';
import { AuthForm, AuthLayout } from '../../components/shared';
import { paths } from '../../paths';
import { registrationSchema } from '../../validation';
import s from './RegistrationPage.module.scss';

type RegistrationFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const initialValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export const RegistrationPage = () => {
  const handleSubmit = (values: Partial<RegistrationFormValues>) => {
    // ...HTTP request should happen here

    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <AuthLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}>
        {({ isValid }) => {
          return (
            <AuthForm title="Provide your info below:">
              <Field
                className={s.textInput}
                component={TextInput}
                title="First name"
                name="firstName"
              />
              <Field
                className={s.textInput}
                component={TextInput}
                title="Last name"
                name="lastName"
              />
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
              <Field
                className={s.textInput}
                component={TextInput}
                title="Confirm password"
                name="passwordConfirmation"
                type="password"
              />
              <Button
                className={s.submitButton}
                type="submit"
                disabled={!isValid}>
                Register
              </Button>
              <p className={s.alreadyHaveAccMessage}>
                Already have an account?{" "}
                <Link className={s.link} to={paths.login()}>
                  Log in
                </Link>
              </p>
            </AuthForm>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};
