import { IUser, IUserApiResponse } from '../types';

const getUserNormalizer = ({
  avatar_url,
  id,
  name,
}: IUserApiResponse): IUser => ({
  id: id,
  avatar: avatar_url,
  name: name,
});

export default { getUserNormalizer };
