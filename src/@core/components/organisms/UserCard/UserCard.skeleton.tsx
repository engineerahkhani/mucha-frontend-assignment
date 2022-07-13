import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import Flex from '../../atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';

const UserCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Flex className={classes.userCardSkeletonRoot}>
      <Skeleton className={classes.skeleton} variant="square" />
    </Flex>
  );
};

const useStyles = createUseStyles(({ radii, sizes }: ITheme) => ({
  userCardSkeletonRoot: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '50%',
    borderRadius: radii.sm,
    overflow: 'hidden',
    padding: sizes.sm,
  },
  skeleton: {
    height: 256,
    width: 256,
  },
}));

export default UserCardSkeleton;
