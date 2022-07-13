import React, { useRef, useState } from 'react';
import Flex from '@core/components/atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';
import {
  Form,
  SubmitButton,
  InputField,
} from '@core/components/molecules/Form';
import useTranslation from '@core/hooks/useTranslation';
import { getUserDetail } from '@core/api/userApi';
import UserCard from '@core/components/organisms/UserCard';
import Alert from '@core/components/molecules/Alert';
import useReactMutation from '@core/hooks/useReactMutation';
import UserCardSkeleton from '@core/components/organisms/UserCard/UserCard.skeleton';
import { FormikProps } from 'formik';

interface IInitValue {
  username: string;
}

const Search = () => {
  const classes = useStyles();
  const formRef = useRef<FormikProps<any>>(null);
  const { t } = useTranslation();
  const {
    mutate,
    isLoading,
    error,
    data: user,
  } = useReactMutation(getUserDetail);

  const onSuccess = () => {
    formRef.current?.resetForm();
    //TODO add to localstorage for offline usage.
  };

  const onSubmitHandler = (value: IInitValue) => {
    return mutate(value, { onSuccess });
  };

  return (
    <Flex className={classes.SearchRoot}>
      <Form
        ref={formRef}
        onSubmit={onSubmitHandler}
        initialValues={{ username: '' }}
        className={classes.formWrapper}
      >
        <InputField placeholder={t('enter_username')} name="username" />
        <SubmitButton className={classes.submitBtn}>{t('search')}</SubmitButton>
      </Form>
      {!!isLoading && <UserCardSkeleton />}
      {!!user && <UserCard data={user} />}
      {!!error && (
        <Alert
          className={classes.error}
          title={t('user_not_found')}
          type="Error"
          description={t('user_not_found_sub')}
        />
      )}
    </Flex>
  );
};
const useStyles = createUseStyles(({ sizes }) => ({
  SearchRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  submitBtn: {
    marginLeft: sizes.sm,
  },
  error: {
    marginTop: sizes.lg,
  },
}));
export default Search;
