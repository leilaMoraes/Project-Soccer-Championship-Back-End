import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '3d',
};

export const createToken = (email: string) => jwt.sign({ email }, JWT_SECRET, JWT_CONFIG);

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);
