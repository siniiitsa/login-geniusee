import cn from 'classnames';
import React, { ReactElement } from 'react';

import s from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  type = "button",
  disabled = false,
  ...props
}: IProps): ReactElement => {
  return (
    <button
      className={cn(s.button, className, disabled && s.disabled)}
      type={type}
      {...props}>
      {children}
    </button>
  );
};
