import * as bcrypt from 'bcryptjs';
import { ILogin, ILoginValidations } from '../interfaces';
import ApiError from '../utils/ApiError';

const invalid = 'Invalid email or password';

export default class LoginValidations implements ILoginValidations {
  emailValidation = (email: string, dbEmail: string): void => {
    if (!email || email === undefined) throw new ApiError(400, 'All fields must be filled');
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email) || email !== dbEmail) throw new ApiError(401, invalid);
  };

  passwordValidation = (password: string, dbPassword: string): void => {
    if (!password) throw new ApiError(400, 'All fields must be filled');
    const compare = bcrypt.compareSync(password, dbPassword);
    if (password.length < 6 || !compare) throw new ApiError(401, invalid);
  };

  loginValidation(login: ILogin, dbPassword: string, dbEmail: string): void {
    this.emailValidation(login.email, dbEmail);
    this.passwordValidation(login.password, dbPassword);
  }
}
