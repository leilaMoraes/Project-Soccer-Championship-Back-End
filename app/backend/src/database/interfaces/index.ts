import { Request } from 'express';
import UsersModel from '../models/UsersModel';

export interface IServices {
  type: number;
  message: string | unknown;
}

export interface ILogin extends UsersModel {
  email: string,
  password: string,
}

export interface IUser extends UsersModel {
  id: number,
  email: string,
  username: string,
  password: string,
  role: string
}

export interface ILoginValidations {
  emailValidation(email: string, dbEmail: string): void
  passwordValidation(password: string, dbPassword: string): void
  loginValidation(login: ILogin, dbPassword: string, dbEmail: string): void
}

export interface IRequest extends Request {
  user?: Omit<ILogin, 'password'>;
}

export interface IGoals {
  homeTeamGoals: number,
  awayTeamGoals: number,
}
