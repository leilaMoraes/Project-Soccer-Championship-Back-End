import { ModelStatic } from 'sequelize';
import { ILogin, ILoginValidations, IServices } from '../interfaces';
import LoginValidations from '../middlewares/loginValidation';
import UsersModel from '../models/UsersModel';
import { createToken } from '../utils/token';

export default class LoginService {
  model: ModelStatic<UsersModel>;
  validations: ILoginValidations;

  constructor() {
    this.model = UsersModel;
    this.validations = new (LoginValidations)();
  }

  async login(login: ILogin): Promise<IServices> {
    const { email } = login;
    const user = await this.model.findOne({ where: { email } });
    this.validations.loginValidation(login, user?.dataValues.password, user?.dataValues.email);
    const token = createToken(email);
    return { type: 200, message: { token } };
  }
}
