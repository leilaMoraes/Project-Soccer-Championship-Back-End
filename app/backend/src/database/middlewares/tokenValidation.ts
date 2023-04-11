import { Response, NextFunction } from 'express';
import { ILogin, IRequest } from '../interfaces';
import ApiError from '../utils/ApiError';
import { verifyToken } from '../utils/token';

const tokenValidation = (req: IRequest, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) throw new ApiError(401, 'Token not found');
  try {
    const decoded = verifyToken(authorization);
    req.user = decoded as Omit<ILogin, 'password'>;
    return next();
  } catch (error) {
    throw new ApiError(401, 'Token must be a valid token');
  }
};

export default tokenValidation;
