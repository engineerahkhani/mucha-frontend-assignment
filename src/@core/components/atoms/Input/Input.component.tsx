import React, { ChangeEventHandler } from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';

export interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement> | boolean) => void;
  placeholder?: string;
  value: any;
  className?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  onChange,
  value,
  onBlur,
  onFocus,
  placeholder,
  name,
}) => {
  const classes = useStyles();

  return (
    <input
      className={cnj(classes.inputRoot, className)}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
};

const useStyles = createUseStyles(({ radii, fontSizes, sizes, colors }) => ({
  inputRoot: {
    display: 'flex',
    border: [[1, 'solid', colors.black]],
    borderRadius: radii.xs,
    padding: [[sizes.xs, sizes.sm]],
    margin: 0,
    background: colors.white,
    color: colors.black,
    fontFamily: 'sans-serif',
    fontSize: fontSizes['1'],
  },
  disabledInput: {
    opacity: 0.5,
  },
}));

export default Input;
