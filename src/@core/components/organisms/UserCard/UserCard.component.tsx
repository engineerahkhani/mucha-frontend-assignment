import React from 'react';
import Image from '../../atoms/Image';
import { IUser } from '../../../types';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';
import Flex from '../../atoms/Flex';
import useTranslation from '../../../hooks/useTranslation';
import Text from '../../atoms/Text';

interface IMovieCardProps {
  data: IUser;
}

const UserCard: React.FC<IMovieCardProps> = ({ data }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Flex className={classes.cardComponentRoot}>
      <Image className={classes.cardImage} src={data.avatar} />
      <Text>
        {t('id')}: {data.id}
      </Text>
      <Text>
        {t('name')}: {data.name}
      </Text>
    </Flex>
  );
};
const useStyles = createUseStyles(
  ({ colors, media, sizes, radii }: ITheme) => ({
    cardComponentRoot: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: radii.sm,
      border: [[1, 'slide', colors.black]],
      padding: sizes.lg,
    },
    cardImage: {
      height: 'auto',
      maxWidth: 256,
      borderRadius: radii.sm,
      overflow: 'hidden',
      objectFit: 'cover',
    },
    [media.tablet]: {
      cardImage: {
        with: 512,
      },
    },
  })
);
export default UserCard;
