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

  async getRole(email: string): Promise<IServices> {
    const user = await this.model.findOne({ where: { email } });
    const role = user?.dataValues.role;
    return { type: 200, message: { role } };
  }
}
