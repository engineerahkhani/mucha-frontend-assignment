import request from '../utils/request';
import END_POINTS from '../constants/endpoints';
import { IUser } from '../types';
import normalizers from './normalizers';

interface IGetUserDetail {
  username: string;
}

const getUserDetail = async ({ username }: IGetUserDetail) => {
  const url = `${END_POINTS.users}/${username}`;
  const { data } = await request.get<IUser>(url);

  return normalizers.getUserNormalizer(data);
};

export { getUserDetail };
