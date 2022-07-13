import { rest } from 'msw';
import APP_CONFIG from '../constants/app-config';
import END_POINTS from '../constants/endpoints';
import mockResponse from './mocksResponse';

const Users_ENDPOINT = `${APP_CONFIG.apiBaseUrl}${END_POINTS.users}`;

const getUsersSuccess = rest.get(Users_ENDPOINT, (req, res, ctx) => {
  return res(ctx.delay(), ctx.json(mockResponse.user));
});

export const handlers = [getUsersSuccess];
