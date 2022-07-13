import React from 'react';
import Flex from '@core/components/atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';

const History = () => {
  const classes = useStyles();

  return (
    <Flex className={classes.SearchRoot}>
      History
    </Flex>
  );
};
const useStyles = createUseStyles({
  SearchRoot: {
    width: '100%',
  },
});
export default History;
