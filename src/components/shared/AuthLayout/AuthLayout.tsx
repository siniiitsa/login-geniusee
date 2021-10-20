import cn from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

import s from './AuthLayout.module.scss';

interface IProps {
  className?: string;
  children: ReactNode;
}

export const AuthLayout = ({ className, children }: IProps): ReactElement => {
  return <div className={cn(s.layout, className)}>{children}</div>;
};
