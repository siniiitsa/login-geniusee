import cn from 'classnames';
import { Form } from 'formik';
import React, { ReactElement, ReactNode } from 'react';

import s from './AuthForm.module.scss';

interface IProps {
  className?: string;
  children: ReactNode;
  title?: string;
}

export const AuthForm = ({
  className,
  children,
  title,
}: IProps): ReactElement => {
  return (
    <div className={cn(s.form, className)}>
      <span className={s.logo}>Genniuse</span>
      {title && <p className={s.title}>{title}</p>}
      <Form autoComplete="off">
        <div className={s.content}>{children}</div>
      </Form>
    </div>
  );
};
