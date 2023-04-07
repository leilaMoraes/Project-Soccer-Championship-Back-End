import { ILoginValidations, IUser } from '../interfaces';
import ApiError from '../utils/ApiError';

export default class LoginValidations implements ILoginValidations {
  emailValidation = (email: string): void => {
    if (!email) throw new ApiError(400, 'All fields must be filled');
  };

  passwordValidation = (password: string): void => {
    if (!password) throw new ApiError(400, 'All fields must be filled');
  };

  loginValidation(login: IUser): void {
    this.emailValidation(login.email);
    this.passwordValidation(login.password);
  }
}
