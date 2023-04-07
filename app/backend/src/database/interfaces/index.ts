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
  emailValidation(email: string): void
  passwordValidation(password: string): void
  loginValidation(login: ILogin): void
}
