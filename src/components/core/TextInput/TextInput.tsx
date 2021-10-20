import cn from 'classnames';
import { FieldInputProps } from 'formik';
import React from 'react';

import s from './TextInput.module.scss';

interface IProps {
  className?: string;
  value?: string | number;
  title?: string;
  placeholder?: string;
  type?: string;
  field?: FieldInputProps<string>;
  form?: any;
}

export const TextInput = ({
  className,
  title,
  placeholder = title,
  type = "text",
  field,
  form,
  ...props
}: IProps) => {
  const error = form.errors[field?.name ?? ""];

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
