import React, { ReactElement, ReactNode } from 'react';

import s from './AuthForm.module.scss';

interface IProps {
  className?: string;
  children: ReactNode;
}

export const AuthForm = ({ className, children }: IProps): ReactElement => {
  return (
    <div className={s.form}>
      <span className={s.logo}>Genniuse</span>
      <div className={s.content}>{children}</div>
    </div>
  );
};
