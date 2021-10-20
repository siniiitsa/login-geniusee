import cn from 'classnames';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, TextInput } from '../../components/core';
import { AuthForm, AuthLayout } from '../../components/shared';
import { paths } from '../../paths';
import { recoverPasswordSchema } from '../../validation';
import s from './RecoverPasswordPage.module.scss';

type RecoverPasswordFormValues = {
  email: string;
};

const initialValues: RecoverPasswordFormValues = {
  email: "",
};

enum PasswordRecoveryStates {
  filling,
  sent,
}

export const RecoverPasswordPage = () => {
  const [state, setState] = useState<PasswordRecoveryStates>(
    PasswordRecoveryStates.filling
  );

  const handleSubmit = (values: Partial<RecoverPasswordFormValues>) => {
    // ...HTTP request should happen here

    // eslint-disable-next-line no-console
    console.log(values);
    setState(PasswordRecoveryStates.sent);
  };

  const renderPasswordRecoveryForm = (isValid: boolean) => (
    <AuthForm title="Fill in you Email to get a recovery letter:">
      <Field
        className={s.textInput}
        component={TextInput}
        title="Email"
        name="email"
        placeholder="mail@genniuse.com"
      />
      <Button className={s.submitButton} type="submit" disabled={!isValid}>
        Get recovery email
      </Button>
      <p className={s.registerMessage}>
        Don't have an account?{" "}
        <Link className={s.link} to={paths.register()}>
          Register
        </Link>
      </p>
      <Link className={cn(s.link, s.noPasswordLink)} to={paths.login()}>
        Back to Log in
      </Link>
    </AuthForm>
  );

  const renderSuccessMessage = () => (
    <AuthForm>
      <h3 className={s.alreadyHaveAccMessage}>
        Success! Check your Email for further instructions.
      </h3>
      <Link className={cn(s.link, s.backToLoginLink)} to={paths.login()}>
        Back to Log in
      </Link>
    </AuthForm>
  );

  return (
    <AuthLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={recoverPasswordSchema}>
        {({ isValid }) => {
          if (state === PasswordRecoveryStates.filling) {
            return renderPasswordRecoveryForm(isValid);
          }

          return renderSuccessMessage();
        }}
      </Formik>
    </AuthLayout>
  );
};
