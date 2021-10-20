import cn from 'classnames';
import React, { ReactElement } from 'react';

import s from './Button.module.scss';

interface IProps {
  className?: string;
  children: string;
}

export const Button = ({ className, children }: IProps): ReactElement => {
  return <button className={cn(s.button, className)}>{children}</button>;
};
