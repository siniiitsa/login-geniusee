import cn from 'classnames';
import React from 'react';

import s from './TextInput.module.scss';

interface IProps {
  className?: string;
  value?: string | number;
  title?: string;
  error?: string;
  placeholder?: string;
  type?: string;
}

export const TextInput = ({
  className,
  value,
  title,
  error,
  placeholder = title,
  type = "text",
}: IProps) => {
  return (
    <div className={cn(s.wrapper, className)}>
      {title && <span className={s.title}>{title}</span>}
      <input
        className={s.input}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};
