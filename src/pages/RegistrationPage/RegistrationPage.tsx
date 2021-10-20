import cn from 'classnames';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
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

enum RegistrationStates {
  ongoing,
  finished,
}

export const RegistrationPage = () => {
  const [state, setState] = useState<RegistrationStates>(
    RegistrationStates.ongoing
  );

  const handleSubmit = (values: Partial<RegistrationFormValues>) => {
    // ...HTTP request should happen here

    // eslint-disable-next-line no-console
    console.log(values);
    setState(RegistrationStates.finished);
  };

  const renderRegistrationForm = (isValid: boolean) => (
    <AuthForm className={s.form} title="Provide your info below:">
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
      <Button className={s.submitButton} type="submit" disabled={!isValid}>
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

  const renderSuccessMessage = () => (
    <AuthForm>
      <h3 className={s.alreadyHaveAccMessage}>
        You registration was a success!
      </h3>
      <Link className={cn(s.link, s.backToLoginLink)} to={paths.login()}>
        Now you can Log in
      </Link>
    </AuthForm>
  );

  return (
    <AuthLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}>
        {({ isValid }) => {
          if (state === RegistrationStates.ongoing) {
            return renderRegistrationForm(isValid);
          }

          return renderSuccessMessage();
        }}
      </Formik>
    </AuthLayout>
  );
};
