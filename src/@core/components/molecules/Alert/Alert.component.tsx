import React from 'react';
import Flex from '../../atoms/Flex';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import Text from '../../atoms/Text';

export interface AlertComponentProps {
  className?: string;
  type: 'Error' | 'EmptyList' | 'NotFound';
  title: string;
  description?: string;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  className,
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Flex className={cnj(classes.alertComponentRoot, className)}>
      <Text>{title}</Text>
      <Flex>{description}</Flex>
    </Flex>
  );
};

const useStyles = createUseStyles(({ sizes, colors }) => ({
  alertComponentRoot: {
    backgroundColor: colors.red,
    padding: sizes.xs,
  },
}));

export default AlertComponent;
