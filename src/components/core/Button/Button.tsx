import cn from 'classnames';
import React, { ReactElement } from 'react';

import s from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;
  isLoading?: boolean;
}

export const Button = ({
  className,
  children,
  type = "button",
  ...props
}: IProps): ReactElement => {
  return (
    <button className={cn(s.button, className)} type={type} {...props}>
      {children}
    </button>
  );
};
