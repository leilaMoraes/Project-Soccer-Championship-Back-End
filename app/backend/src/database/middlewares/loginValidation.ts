import { NextFunction, Request, Response } from 'express';
import ApiError from '../utils/ApiError';

const loginValidation = (_res: Response, req: Request, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) throw new ApiError(400, 'All fields must be filled');
  next();
};

export default loginValidation;
