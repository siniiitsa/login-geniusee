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
  const name = field?.name as string;
  const error = form.errors[name];
  const touched = form.touched[name];

  const showError = error && touched;

  return (
    <div className={cn(s.wrapper, className)}>
      {title && (
        <label htmlFor={name} className={s.title}>
          {title}
        </label>
      )}
      <input
        id={name}
        className={cn(s.input, showError && s.inputError)}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {showError && <span className={s.error}>{error}</span>}
    </div>
  );
};
