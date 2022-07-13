import React from 'react';
import { Field } from 'formik';
import Button from '../../../atoms/Button';
import type { FieldProps } from 'formik';
import type { ButtonProps } from '../../../atoms/Button/Button.component';

const SubmitButton = ({ children, ...rest }: ButtonProps) => (
  <Field>
    {({ form }: FieldProps) => (
      <Button
        {...rest}
        onClick={form.handleSubmit}
        disabled={form.isSubmitting || !form.dirty}
      >
        {children}
      </Button>
    )}
  </Field>
);
export default SubmitButton;
