import React from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';

interface FormProps {
  children?: React.ReactNode;
  initialValues: FormikValues;
  validate?: () => any;
  onSubmit: any;
  className: string;
  ref?: any;
}

const Form: React.FC<FormProps> = React.forwardRef(
  ({ children, initialValues, validate, onSubmit, className }, formRef) => {
    return (
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        // @ts-ignore
        innerRef={formRef}
      >
        <FormikForm className={className}>{children}</FormikForm>
      </Formik>
    );
  }
);

export default Form;
