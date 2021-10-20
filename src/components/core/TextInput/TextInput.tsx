import cn from 'classnames';
import { FieldInputProps } from 'formik';
import React from 'react';

import s from './TextInput.module.scss';

interface IProps {
  className?: string;
  value?: string | number;
  title?: string;
  error?: string;
  placeholder?: string;
  type?: string;
  field?: FieldInputProps<string>;
}

export const TextInput = ({
  className,
  title,
  error,
  placeholder = title,
  type = "text",
  field,
  ...props
}: IProps) => {
  return (
    <div className={cn(s.wrapper, className)}>
      {title && <span className={s.title}>{title}</span>}
      <input
        className={s.input}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};
